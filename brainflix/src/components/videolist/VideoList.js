// VideoList.js
import React from 'react';
import './_VideoList.scss';

const VideoList = ({ videos, onVideoSelect }) => {
    return (
        <div className="video-list">
            <h1 className="video-list__title">NEXT VIDEOS</h1>
            {videos.map(video => (
                <div className="video__thumbnail" key={video.id} onClick={() => onVideoSelect(video)}>
                    <img src={video.image} alt={video.title} />
                    <div className="video__thumbnail-info">
                        <h2>{video.title}</h2>
                        <h3>{video.channel}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoList;






