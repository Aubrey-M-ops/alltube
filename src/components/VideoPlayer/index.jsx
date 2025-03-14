import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./index.scss";
import Video from "@assets/videos/movie.mp4"

const VideoPlayer = () => {

    let { video_id } = useParams();

    useEffect(() => {


    }, []);

    return (
        <div>
            <video className="alltube_video_player" src={Video} controls />
        </div>
    );
};

export default VideoPlayer;