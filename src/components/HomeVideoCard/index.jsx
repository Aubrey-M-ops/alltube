import React from "react";
import "./index.scss";

import { Avatar, Card } from 'antd';
const { Meta } = Card;

const HomeVideoCard = ({ video_screenshot_url, avatar_url, video_title, video_description }) => {

    return (
        <Card
            className="homepage_card"
            cover={
                <img
                    alt="video_screenshot"
                    src={video_screenshot_url}
                />
            }
        >
            <Meta
                avatar={<Avatar src={avatar_url} />}
                title={video_title}
                description={video_description}
            />
        </Card>
    );
}

export default HomeVideoCard;