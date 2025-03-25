import React from "react";
import classNames from "classnames";
import OutSiteIcon from "@assets/icons/OutSite";
import { Avatar, Card, Tooltip, Button } from "antd";
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
          {videoData.isAd ? (
            <Tooltip title="Visit the site">
              <Button
                shape="circle"
                icon={<OutSiteIcon />}
                onClick={(e) => {
                  window.open("https://colab.google/", "_blank");
                  e.stopPropagation();
                }}
              />
            </Tooltip>
          ) : null}
        </>
      }
      onClick={() => {
        window.location.href = `/video?video_id=${video_id}`;
      }}
    >
      <Meta
        avatar={<Avatar src={avatar_url} />}
        title={video_title}
        description={
          <>
            {videoData.isAd ? (
              <strong style={{ color: "white" }}>sponsored · </strong>
            ) : null}
            {video_description}
          </>
        }
      />
    </Card>
  );
};

export default HomeVideoCard;
