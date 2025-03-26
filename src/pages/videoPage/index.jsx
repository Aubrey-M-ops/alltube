import React from 'react';

import VideoPlayer from '@components/VideoPlayer';
import IntroArea from '@components/IntroArea';
import './index.scss'

const VideoPage = ({videoItem}) => {
    return (
        <div className="video-player">
            <VideoPlayer videoItem={videoItem} />
            <IntroArea />
        </div>
    )
};

export default VideoPage;
