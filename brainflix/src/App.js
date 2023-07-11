// App.js
// App.js
import React, { useState, useEffect } from 'react';
import './app.scss';
import Nav from './components/nav/Nav';
import Upload from './pages/upload/Upload';
import VideoPage from './pages/videoPage/VideoPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('http://localhost:5001/videos');
            const data = await response.json();
            console.log("Fetched videos: ", data); 
            setVideos(data);
            setIsLoading(false);
        } catch (error) {
            console.error(`Error fetching videos: ${error}`);
            setIsLoading(false);  
        }
    };

    const handleVideoUpload = (title, description, image, navigate) => {
        const newVideo = {
            id: uuidv4(),
            title,
            description,
            image,
            views: 0,
            likes: 0,
            comments: []
        };

        axios.post('http://localhost:5001/videos', newVideo)
            .then(() => {
                fetchVideos().then(() => {
                    alert('Video uploaded!');
                    navigate('/');
                });
            })
            .catch(err => console.error(err));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={videos.length > 0 ? <Navigate to={`/videos/${videos[0].id}`} /> : <div>Loading...</div>} />
                    <Route path="/upload" element={<Upload onVideoUpload={handleVideoUpload} />} />
                    <Route path="/videos/:id" element={<VideoPage videos={videos} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
















































