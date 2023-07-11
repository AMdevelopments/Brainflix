// VideoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../../components/videoplayer/VideoPlayer';
import VideoDetail from '../../components/videoDetail/VideoDetail';
import VideoList from '../../components/videolist/VideoList';
import './_VideoPage.scss';

const VideoPage = ({ videos }) => {
    const { id } = useParams();
    
    return (
        <div className="video-page">
            <VideoPlayer videoId={id} />
            <div className="video-page__content">
                <div className="video-page__main">
                    <VideoDetail videoId={id} />
                </div>
                <div className="video-page__sidebar">
                    <VideoList videos={videos} currentVideoId={id} />
                </div>
            </div>
        </div>
    );
};

export default VideoPage;





