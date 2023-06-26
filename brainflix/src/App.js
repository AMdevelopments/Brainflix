// App.js
import React, { useState } from 'react';
import './app.scss';

import Nav from './components/nav/Nav';
import VideoPlayer from './components/videoplayer/VideoPlayer';
import VideoDetail from './components/videoDetail/VideoDetail';
import VideoList from './components/videolist/VideoList';


import videosData from './Data/video-details.json'; // If your data is in a JSON file

const App = () => {
    const [allVideos, setAllVideos] = useState(videosData);
    const [currentVideo, setCurrentVideo] = useState(videosData[0]); // Initial video is the first one

    const handleVideoSelect = (video) => {
        setCurrentVideo(video); // Set the clicked video as the current one
    };

    const videos = allVideos.filter(video => video.id !== currentVideo.id); // Get the video list excluding the current video

    return (
        <>
            <Nav /> {/* Navbar out of the .app div */}
            <div className="app">
                <VideoPlayer video={currentVideo} />
                <div className="app__content">
                    <div className="app__main">
                        <VideoDetail video={currentVideo} />
                    </div>
                    <div className="app__sidebar">
                        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;














