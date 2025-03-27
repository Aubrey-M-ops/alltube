import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";
import HomePage from "pages/homePage";
import VideoContainer from "@components/VideoContainer";
import PlaylistPage from "pages/playlistPage";
import TopBar from "@components/TopBar";
import SideBar from "@components/SideBar";
import { Layout } from "antd";
import "./App.scss";
import "./App.css";
import { video_data } from "data/VideoData";
import { playlist_data } from "data/PlayListData";

const { Sider, Content } = Layout;

function AppLayout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const video_id = searchParams.get("video_id");
  const videoItem = video_data.find(video => video.video_id === Number(video_id));
  const isPlayerPage = location.pathname.startsWith("/video");

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
            <Route path="/playlist" element={<Navigate to="/playlist/0" />} />
            <Route path="/playlist/:id" element={<PlaylistPage  />} />
            <Route 
              path="/video" 
              element={
                <VideoContainer 
                  video={videoItem || {
                    videoUrl: "",
                    duration: 0
                  }} 
                />
              } 
            />
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