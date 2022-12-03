import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";

import Main from "./components/Main/Main";
import Channel from "./components/Channel/Channel";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
