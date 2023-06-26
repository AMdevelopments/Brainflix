// VideoPlayer.js
import React from 'react';
import './_VideoPlayer.scss'; 

const VideoPlayer = ({ video }) => {
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















