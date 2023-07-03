// VideoDetail.js
import React from 'react';
import Comments from '../comments/Comments';


import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    
    const date = new Date(video.timestamp).toLocaleDateString();

    return (
        <div className="video-detail">
            <h1 className="video-detail__title">{video.title}</h1>
            <div className="video-detail__info">
                <div className="video-detail__channel">{video.channel}</div>
                <div className="video-detail__data">
                    <div className="video-detail__date">{date}</div>
                    <div className="icon-text views-icon-text">
                        <img className="icon" src={viewsIcon} alt="views"/>
                        <span>{video.views} Views</span>
                    </div>
                    <div className="icon-text likes-icon-text">
                        <img className="icon" src={likesIcon} alt="likes"/>
                        <span>{video.likes} Likes</span>
                    </div>
                </div>
            </div>
            <hr />
            <p className="video-detail__description">{video.description}</p>
            <div className="video-detail__comments">
                <Comments comments={video.comments} />   
            </div>
        </div>
    );
};

export default VideoDetail;










