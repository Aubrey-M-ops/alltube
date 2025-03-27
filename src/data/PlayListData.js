  export const playlist_data = [
    {
        id: "0",
        type: "directory",
        name: "Playlist",
        parent: null, 
        description: "Root Directory",
        thumbnail: "https://i.ytimg.com/vi/XP3FDSlCjrE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAosIcX1BrAOaTOBjsNyerzIzc6rg",
        children: ["1"] // 包含了 id 为 2 和 3 的元素
      },
    {
      id: "1",
      type: "directory",
      name: "My collection",
      parent: "0", 
      description: "My collection",
      thumbnail: "https://i.ytimg.com/vi/XP3FDSlCjrE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAosIcX1BrAOaTOBjsNyerzIzc6rg",
      children: ["2", "3"] // 包含了 id 为 2 和 3 的元素
    },
    {
      id: "2",
      type: "playlistDirectory",
      name: "Music",
      parent: "1", // 在“我的收藏”目录下
      description: "Music Collection",
      thumbnail: "https://i.ytimg.com/vi/YttW9q2virs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQd73W4E9iEGAs_ZzSqAmCDGjvmw",
      children: ["4", "5"] // 包含了 videoItem 的 id
    },
    {
      id: "3",
      type: "playlistDirectory",
      name: "Movie",
      parent: "1", // 在“我的收藏”目录下
      description: "Movie Collection",
      thumbnail: "https://i.ytimg.com/vi/YttW9q2virs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQd73W4E9iEGAs_ZzSqAmCDGjvmw",
      children: ["6"]
    },
    {
      id: "4",
      type: "videoItem",
      name: "Classic MV",
      parent: "2", // 在“音乐”播放列表下
      description: "Classic MV",
      thumbnail: "mv-thumbnail.jpg",
      link: "2",
      children: null
    },
    {
      id: "5",
      type: "videoItem",
      name: "Rock",
      parent: "2", // 在“音乐”播放列表下
      description: "Rock MV",
      thumbnail: "rock-mv.jpg",
      link: "3",
      children: null
    },
    {
      id: "6",
      type: "videoItem",
      name: "Rick",
      parent: "3", // 在“电影”播放列表下
      description: "2025 hottest movie",
      thumbnail: "sci-fi.jpg",
      link: "4",
      children: null
    }
  ];
  