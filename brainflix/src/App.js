// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import axios from 'axios';
import './app.scss';

import Nav from './components/nav/Nav';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import VideoDetail from './components/videoDetail/VideoDetail';
import VideoList from './components/videolist/VideoList';
import Upload from './pages/upload/Upload';

const API_KEY = '1813bc17-ecb7-47bc-af56-b8c21216a030';

const App = () => {
    const [allVideos, setAllVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [error, setError] = useState(null); // new error state

    const fetchVideoDetails = async (videoId) => {
        try {
            const response = await axios.get(`https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${API_KEY}`);
            return response.data;
        } catch (error) {
            setError('Error fetching video details'); // set error state
            console.error('Error fetching video details:', error);
        }
    };

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`);
                setAllVideos(response.data);
                const firstVideo = await fetchVideoDetails(response.data[0].id);
                setCurrentVideo(firstVideo);
            } catch (error) {
                setError('Error fetching videos'); // set error state
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    const VideoWithDetails = () => {
        const { videoId } = useParams();
        const [video, setVideo] = useState(null);
        const videos = allVideos.filter(v => v.id !== videoId);

        useEffect(() => {
            const fetchData = async () => {
                const videoDetails = await fetchVideoDetails(videoId);
                setVideo(videoDetails);
            };
            fetchData();
        }, [videoId]);

        if (!video) return <div>Loading...</div>;

        return (
            <>
                <VideoPlayer video={video} />
                <div className="app__content">
                    <div className="app__main">
                        <VideoDetail video={video} />
                    </div>
                    <div className="app__sidebar">
                        <VideoList videos={videos} />
                    </div>
                </div>
            </>
        );
    };

    if (error) return <div>{error}</div>; // if there's an error, render it

    if (!currentVideo) return <div>Loading...</div>;

    const videos = allVideos.filter(video => video.id !== currentVideo.id);

    return (
        <Router>
            <Nav />
            <div className="app">
                <Routes>
                    <Route path="/" element={
                        <>
                            <VideoPlayer video={currentVideo} />
                            <div className="app__content">
                                <div className="app__main">
                                    <VideoDetail video={currentVideo} />
                                </div>
                                <div className="app__sidebar">
                                    <VideoList videos={videos} />
                                </div>
                            </div>
                        </>
                    }/>
                    <Route path="/videos/:videoId" element={<VideoWithDetails />} />
                    <Route path="/upload" element={<div className="main-container"><Upload /></div>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;





















