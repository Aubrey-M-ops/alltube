  export const playlist_data = [
    {
        id: "0",
        type: "directory",
        name: "Playlist",
        parent: null, 
        description: "Root Directory",
        thumbnail: "https://i.ytimg.com/vi/XP3FDSlCjrE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAosIcX1BrAOaTOBjsNyerzIzc6rg",
        children: ["1","11"] // 包含了 id 为 2 和 3 的元素
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
      description: "Soirée de Vienne - Astley",
      thumbnail: "https://i.ytimg.com/vi/5O7UA_AcWCc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD1gt_avRVqHqPwETBbR0Z71TAaDQ",
      link: "2",
      children: null
    },
    {
      id: "5",
      type: "videoItem",
      name: "Rock",
      parent: "2", // 在“音乐”播放列表下
      description: "One OK Rick - Roll:All",
      thumbnail: "https://i.ytimg.com/vi/TmwCl9wUrC8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJ31awTPb_kLUQJ_Sf3n_VHeHUlQ",
      link: "3",
      children: null
    },
    {
      id: "6",
      type: "videoItem",
      name: "John Rick",
      parent: "3", // 在“电影”播放列表下
      description: "John Rick",
      thumbnail: "https://i.ytimg.com/vi/qEVUtrk8_B4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAA-AZZ9r0wg8aEOBE3ndO6VkvpVQ",
      link: "4",
      children: null
    },
    {
      id: "7",
      type: "playlistDirectory",
      name: "Dance Tutorial",
      parent: "11", // 在“我的收藏”目录下
      description: "Dance Tutorial",
      thumbnail: "https://i.ytimg.com/vi/YttW9q2virs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQd73W4E9iEGAs_ZzSqAmCDGjvmw",
      children: ["8","9","10","12"]
    },
    {
      id: "8",
      type: "videoItem",
      name: "Party steps - Entry level",
      parent: "7", // 在“舞蹈教学”播放列表下
      description: "Party steps - Entry level",
      thumbnail: "https://i.ytimg.com/vi/3zuDd9PsoK4/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDLac-tdyKQe8eCKOO5h65A0u8hpQ",
      link: "5",
      children: null
    },
    {
      id: "9",
      type: "videoItem",
      name: "Ballroom Dancing - Entry level",
      parent: "7", // 在“舞蹈教学”播放列表下
      description: "Ballroom Dancing - Entry level",
      thumbnail: "https://i.ytimg.com/vi/RU9XsurRTHI/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBFacKr9dho6hzYHKu_N-xCapodDw",
      link: "6",
      children: null
    },
    {
      id: "10",
      type: "videoItem",
      name: "Stage dance - entry example",
      parent: "7", // 在“舞蹈教学”播放列表下
      description: "Stage dance - entry example",
      thumbnail: "https://i.ytimg.com/vi/BxOBhZBLOio/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbokHyZgnmVpv8A6aCMauQdRzzfg",
      link: "7",
      children: null
    },
    {
      id: "11",
      type: "directory",
      name: "to study list",
      parent: "0", 
      description: "to study list",
      thumbnail: "https://i.ytimg.com/vi/XP3FDSlCjrE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAosIcX1BrAOaTOBjsNyerzIzc6rg",
      children: ["7","13"] // 包含了 id 为 7 的元素
    },
    {
      id: "12",
      type: "videoItem",
      name: "poppin - entry level",
      parent: "7", // 在“舞蹈教学”播放列表下
      description: "poppin - entry level",
      thumbnail: "https://i.ytimg.com/vi/h6M4jrhsgl4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCX-1w9lzsdAQ21p4Ye2ouaiNlghg",
      link: "8",
      children: null
    },
    {
      id: "13",
      type: "playlistDirectory",
      name: "Gyming Tutorial",
      parent: "11", // 在“我的收藏”目录下
      description: "Gyming Tutorial",
      thumbnail: "https://i.ytimg.com/vi/YttW9q2virs/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBQd73W4E9iEGAs_ZzSqAmCDGjvmw",
      children: null
    },
  ];
  