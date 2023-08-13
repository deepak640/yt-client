import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Library from "./pages/Library/Library";
import YourVideo from './pages/YourVideo/YourVideo'
import WatchHistory from './pages/WatchHistory/WatchHistory'
import WatchLater from './pages/WatchLater/WatchLater'
import LikedVideo from './pages/LikedVideo/LikedVideo'
import VideoPage from "./pages/VideoPage/VideoPage";
import Channel from "./pages/Channel/Channel";
import Search from "./pages/search/Search";
const AllRoutes = ({ setEditCreateChannelBtn, setVideoUploadPage }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<Library />} />
      <Route path="/yourvideos" element={<YourVideo />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/likedvideos" element={<LikedVideo />} />
      <Route path="/library" element={<Library />} />
      <Route path="/videopage/:vid" element={<VideoPage />} />
      <Route path="/search/:searchQuery" element={<Search />} />
      <Route path="/channel/:Cid" element={<Channel setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />} />
    </Routes>
  )
}

export default AllRoutes