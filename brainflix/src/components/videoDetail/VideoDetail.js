// VideoDetail.js
import React from 'react';
import Comments from '../comments/Comments';

import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import addCommentIcon from '../../assets/Icons/add_comment.svg'; // Import add_comment.svg

const VideoDetail = ({ video }) => {
    const date = new Date(video.timestamp).toLocaleDateString();

    return (
        <div className="video-detail">
            <h1 className="video-detail__title">{video.title}</h1>
            <div className="video-detail__info">
                <span className="video-detail__channel">{video.channel}</span>
                <div className="video-detail__data">
                    <span className="video-detail__date">{date}</span>
                    <div className="icon-text">
                        <img className="icon" src={viewsIcon} alt="views"/>
                        <span>{video.views} Views</span>
                    </div>
                    <div className="icon-text">
                        <img className="icon" src={likesIcon} alt="likes"/>
                        <span>{video.likes} Likes</span>
                    </div>
                </div>
            </div>
            <hr />
            <p className="video-detail__description">{video.description}</p>
            <img className="video-detail__add-comment-icon" src={addCommentIcon} alt="Add comment"/>
            <div className="video-detail__comments">
                <Comments comments={video.comments} />   
            </div>
        </div>
    );
};

export default VideoDetail;







