// VideoList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './_VideoList.scss';

const VideoList = ({ videos }) => {
    return (
        <div className="video-list">
            <h1 className="video-list__title">NEXT VIDEOS</h1>
            {videos.map(video => (
                <Link to={`/videos/${video.id}`} key={video.id} style={{ textDecoration: 'none' }}>
                    <div className="video__thumbnail">
                        <img src={video.image} alt={video.title} />
                        <div className="video__thumbnail-info">
                            <h2>{video.title}</h2>
                            <h3>{video.channel}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default VideoList;








