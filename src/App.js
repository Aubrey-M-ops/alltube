import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import HomePage from "pages/homePage";
import Playlist from "pages/playlist";
import VideoPage from "pages/videoPage";
import TopBar from "@components/TopBar";
import SideBar from "@components/SideBar";
import { Layout } from "antd";
import { useState } from "react";

import "./App.css";
import { video_data } from "data/VideoData";

const { Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Layout>
          <Sider>
            <SideBar />
          </Sider>
        
        <Content className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/video" element={<VideoPage videoItem={video_data} />} />
          </Routes>
        </Content>
      </Layout>
    </div>
    </Router>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
