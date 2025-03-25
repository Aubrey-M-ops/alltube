import React from "react";
import classNames from "classnames";
import OutSiteIcon from "@assets/icons/OutSite";
import { Avatar, Card, Tooltip } from "antd";
const { Meta } = Card;
import "./index.scss";

const HomeVideoCard = ({ videoData }) => {
  const {
    video_screenshot_url,
    video_id,
    avatar_url,
    video_title,
    video_description,
  } = videoData;
  return (
    <Card
      className="homepage-card"
      variant="borderless"
      cover={
        <>
          <img
            className={classNames("homepage-card-cover", {
              "homepage-card-cover-ad": videoData.isAd,
            })}
            alt="video_screenshot"
            src={video_screenshot_url}
          />
          <Tooltip
            className="homepage-card-tooltip"
            title="Ad"
            visible={videoData.isAd}
          >
            <OutSiteIcon />
          </Tooltip>
        </>
      }
      onClick={() => {
        window.location.href = `/video?video_id=${video_id}`;
      }}
    >
      <Meta
        avatar={<Avatar src={avatar_url} />}
        title={video_title}
        description={video_description}
      />
    </Card>
  );
};

export default HomeVideoCard;
