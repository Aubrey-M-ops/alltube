import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import Playlist from "pages/playlist";
import TopBar from "@components/TopBar";
import SideBar from "@components/SideBar";
import { Layout } from "antd";
import { useState } from "react";

import "./App.css";

const { Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="App">
        <TopBar toggleSidebar={() => setCollapsed(prev => !prev)} />
        <Layout>
          <Sider collapsible collapsed={collapsed} width={260} collapsedWidth={60}>
            <SideBar />
          </Sider>
          <Content className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/playlist" element={<Playlist />} />
            </Routes>
          </Content>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
