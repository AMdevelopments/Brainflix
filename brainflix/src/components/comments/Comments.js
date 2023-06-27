// Comments.js
import React from 'react';
import './_comments.scss'; 
import addCommentIcon from '../../assets/Icons/add_comment.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

const Comments = ({ comments }) => {
    return (
        <div className="comments">
            <h2 className="comments__title">{comments.length} Comments</h2>
            <h3 className="comments__conversation">JOIN THE CONVERSATION</h3>
            <div className="new-comment-section">
                <img className="new-comment-section__avatar" src={avatar} alt="User Avatar" />
                <div className="new-comment-section__bar">
                    <input type="text" className="new-comment-section__bar-input" placeholder="Add a new comment" />
                </div>
                <button className="new-comment-section__bar-button">
                    <img src={addCommentIcon} alt="Add Comment" />
                    Comment
                </button>
            </div>
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <div className="avatar"></div>
                    <div className="comment__content">
                        <div className="comment__header">
                            <h3>{comment.name}</h3>
                            <p>{new Date(comment.timestamp).toLocaleDateString()}</p>
                        </div>
                        <p className="comment__text">{comment.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;







