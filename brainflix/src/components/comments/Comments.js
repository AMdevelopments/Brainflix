// Comments.js
import React from 'react';
import './_comments.scss'; // Import your SCSS file here

const Comments = ({ comments }) => {
    return (
        <div className="comments">
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <div className="avatar"></div>
                    <div className="comment__content">
                        <div className="comment__header">
                            <h3>{comment.name}</h3>
                            <p>{new Date(comment.timestamp).toLocaleDateString()}</p>
                        </div>
                        <p className="comment__text">{comment.comment}</p>  {/* Added new class here */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Comments;




