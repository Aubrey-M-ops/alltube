import React from "react";
import { Link } from "react-router-dom";
import { playlist_data } from "../../data/PlayListData"; // 引入数据

const Breadcrumb = ({ currentId }) => {
  const getParentBreadcrumbs = (id) => {
    const breadcrumbs = [];
    let currentItem = playlist_data.find(item => item.id === id);

    // 逐层获取 parent，直到没有 parent（即根目录）
    while (currentItem) {
      breadcrumbs.unshift(currentItem);  // 将当前目录加入数组的前面
      if (currentItem.parent === null) break;  // 根目录的 parent 为 null，结束递归
      currentItem = playlist_data.find(item => item.id === currentItem.parent);  // 获取 parent
    }

    return breadcrumbs;
  };

  const breadcrumbs = getParentBreadcrumbs(currentId);

  return (
    <div className="breadcrumb">
      {breadcrumbs.map((item, index) => (
        <span key={item.id}>
          <Link to={`/playlist/${item.id}`}>
            {item.name}  {/* 显示目录名称 */}
          </Link>
          {index < breadcrumbs.length - 1 && " > "} {/* 添加 > 作为分隔符 */}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;

