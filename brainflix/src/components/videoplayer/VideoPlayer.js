// VideoPlayer.js
import React, { useEffect, useState } from 'react';
import './_VideoPlayer.scss';

const VideoPlayer = ({ videoId }) => {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await fetch(`http://localhost:5001/videos/${videoId}`);
                const data = await response.json();
                setVideo(data);
            } catch (error) {
                console.error(`Error fetching video: ${error}`);
            }
        };
        fetchVideo();
    }, [videoId]);

    if (!video) {
        return <div>Loading...</div>;
    }

    return (
        <div className="video-player">
            <video 
                controls 
                className="video-player__video" 
                poster={video.image}
            >
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;



















