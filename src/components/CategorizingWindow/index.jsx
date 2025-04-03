import React, { useState } from "react";
import { playlist_data } from "data/PlayListData"; // 引入 Playlist 数据
import "./index.scss";

const CategorizingWindow = ({ onClose }) => {
  const [labelName, setLabelName] = useState("");
  const [isNested, setIsNested] = useState(false);

  // 根据复选框状态筛选并排序
  const filteredPlaylists = playlist_data
    .filter((item) => item.type === (isNested ? "directory" : "playlistDirectory"))
    .sort((a, b) => a.name.localeCompare(b.name)); // 按字母顺序排序

    const handleCreate = () => {
        if (window.confirm("Are you sure you want to create this playlist?")) {
          // 执行创建操作
          console.log("Playlist created:", labelName);
          onClose(); // 关闭窗口
        }
      }
    const handleCateGorizing = () => {
        if (window.confirm("Are you sure you want to categorize the video to this playlist?")) {
          // 执行创建操作
          console.log("Categorize to playlist:", labelName);
          onClose(); // 关闭窗口
        }
      }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Categorize Video</h2>
        {/* 复选框 + 下拉菜单 */}
        <div className="nested-option">
            <label>
                Categorize to:
            </label>
            <select>
                <option value="">{isNested ? "Select category..." : "Select playlist..."}</option>
                {filteredPlaylists.map((playlist) => (
                <option key={playlist.id} value={playlist.id}>
                    {playlist.name}
                </option>
                ))}
            </select>
            <div className="checkbox-container">
                <span>
                    <input
                        type="checkbox"
                        checked={isNested}
                        onChange={() => setIsNested(!isNested)}
                    />
                </span>
                <span>Create new playlist</span>
            </div>
        </div>

        {isNested && (
          <div className="name-input">
            <label>Please enter the new playlist name:</label>
            <input
              type="text"
              value={labelName}
              onChange={(e) => setLabelName(e.target.value)}
            />
          </div>
        )}

        {/* 按钮 */}
        <div className="button-group">
          <button onClick={onClose}>Cancel</button>
          <button onClick={isNested ? handleCreate:handleCateGorizing}>{isNested ? "Create" : "Categorize"}</button>
        </div>
      </div>
    </div>
  );
};

export default CategorizingWindow;
