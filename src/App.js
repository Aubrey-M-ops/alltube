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

import "./App.css";
import { video_data } from "data/VideoData";

const { Sider, Content } = Layout;

function AppLayout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); 
  const video_id = searchParams.get("video_id"); 
  const videoItem = video_data.find(
    (video) => video.video_id === Number(video_id)
  );
  const isPlayerPage = location.pathname.startsWith("/video");
console.log(videoItem,video_id, 123123213)
  return (
    <div className="App">
      <TopBar />
      <Layout>
        {!isPlayerPage && (
          <Sider>
            <SideBar />
          </Sider>
        )}
        <Content className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/video" element={<VideoPage videoItem={videoItem} />} />
          </Routes>
        </Content>
      </Layout>
    </div>
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
