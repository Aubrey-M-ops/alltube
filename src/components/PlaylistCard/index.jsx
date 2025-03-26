import React from "react";
import { Card } from "antd"; // 确保你在项目中安装了 antd
import { PlayCircleOutlined } from "@ant-design/icons";
import "./index.scss"; // 引入 SCSS

const { Meta } = Card;

const PlaylistCard = ({ item, onNavigate }) => {
  const handleClick = () => {
    if (item.type === "directory" || item.type === "playlistDirectory") {
      onNavigate(`/playlist/${item.id}`); // 进入子目录
    } else if (item.type === "videoItem") {
      onNavigate(`/video?video_id=${item.link}`); // 播放视频
    }
  };

  return (
    <div className="playlistpage-card" onClick={handleClick}>
      <Card
        hoverable
        className={item.type === "ad" ? "playlistpage-card-cover-ad" : ""}
        // style={{ width: 240 }}
        cover={
          <div className="ant-card-cover">
            <img src={item.thumbnail} alt={item.name} />
            {item.type === "videoItem" && (
              <button>
                <PlayCircleOutlined style={{ fontSize: "24px", color: "#000" }} />
              </button>
            )}
          </div>
        }
      >
        <Meta
          title={item.name}
          description={item.description}
        />
      </Card>
    </div>
  );
};

export default PlaylistCard;

