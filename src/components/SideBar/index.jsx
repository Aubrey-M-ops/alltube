import React from "react";
import { Menu } from "antd";
import HouseIcon from "@assets/icons/Home";
import Subscribe from "@assets/icons/Subscriptions";
import Shorts from "@assets/icons/shorts";
import PlaylistIcon from "@assets/icons/Playlist";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const items = [
  {
    key: "home",
    icon: <HouseIcon />,
    label: "Home",
  },
  {
    key: "shorts",
    icon: <Shorts />,
    label: "Shorts",
  },
  {
    key: "subscribe",
    icon: <Subscribe />,
    label: "Subscriptions",
  },
  {
    type: "divider",
  },
  {
    key: "playlist",
    icon: <PlaylistIcon />,
    label: "Playlists",
  },
  {
    key: "others",
    icon: <PlaylistIcon />,
    label: "...To be continued",
  },
];

const formatKey = () => {
  const _key = window.location.pathname.substring(1);
  return _key || "home";
};

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div id="sidebar">
      <Menu
        defaultSelectedKeys={["home"]}
        selectedKeys={[formatKey()]}
        mode="inline"
        theme="dark"
        items={items}
        onSelect={({ item, key }) => {
          console.log("item", item, key);
          // replace url
          const _path = `/${key === "home" ? "" : key}`;
          navigate(_path);
        }}
      />
    </div>
  );
};

export default SideBar;
