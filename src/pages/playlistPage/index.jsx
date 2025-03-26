import React, { useEffect } from "react"; // ✅ 添加 useEffect 以防报错
import { useParams, useNavigate } from "react-router-dom";
import { playlist_data } from "../../data/PlayListData"; // 你的数据
import PlaylistCard from "../../components/PlaylistCard";
import Breadcrumb from "../../components/PlaylistBreadcrumb";
import "../../components/PlaylistCard/index.scss";
import "./index.scss";

const PlaylistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ID:", id);
    if (!id) {
      navigate("/playlist/0", { replace: true }); // ✅ 如果 id 为空，默认跳转到根目录
    }
  }, [id, navigate]);

  const currentDir = playlist_data.find(item => item.id === id) || playlist_data[0]; // ✅ 默认根目录
  const items = playlist_data.filter(item => currentDir.children?.includes(item.id));

  return (
    <div className="playlist-page"> {/* ✅ 添加 padding-left 避免被 Sidebar 遮挡 */}
      <Breadcrumb currentId={id} />
      <div className="playlist-container"> {/* ✅ 使卡片有固定宽度并自适应换行 */}
        {items.map(item => (
          <PlaylistCard key={item.id} item={item} onNavigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;



