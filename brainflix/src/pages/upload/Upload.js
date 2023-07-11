// Upload.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_upload.scss';
import previewImage from '../../assets/Images/Upload-video-preview.jpg';
import { ReactComponent as PublishIcon } from '../../assets/Icons/publish.svg';

const Upload = ({ onVideoUpload }) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const image = previewImage;

        onVideoUpload(title, description, image, navigate);
    };

    return (
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <hr className="upload__divider" />
            <div className="upload__content">
                <div className="upload__preview">
                    <p className="upload__preview-text">VIDEO THUMBNAIL</p>
                    <img src={previewImage} alt="Video preview" className="upload__preview-image" />
                </div>
                <form onSubmit={handleSubmit} className="upload__form">
                    <label htmlFor="title" className="upload__form-label">TITLE YOUR VIDEO</label>
                    <input type="text" id="title" placeholder="Add a title to your video" className="upload__form-input" required />

                    <label htmlFor="description" className="upload__form-label">ADD A VIDEO DESCRIPTION</label>
                    <textarea id="description" placeholder="Add a description to your video" className="upload__form-textarea" required />
                    <hr className="upload__divider-actions" />
                    <div className="upload__form-actions">
                        <div className="upload__form-cancel-container">
                            <span className="upload__form-cancel" onClick={() => navigate('/')}>Cancel</span>
                        </div>
                        <button type="submit" className="upload__form-submit">
                            <PublishIcon className="upload__form-submit-icon" />
                            <span className="upload__form-submit-text">Publish</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Upload;




















