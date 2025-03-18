import React from 'react';

import VideoPlayer from '@components/VideoPlayer';
import './index.scss'

const VideoPage = ({videoItem}) => {
    return (
        <div className="video-player">
            <VideoPlayer videoItem={videoItem} />
        </div>
    )
};

export default VideoPage;
