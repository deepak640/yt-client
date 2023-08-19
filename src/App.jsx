import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import AllRoutes from './Components/Router';
import 'react-toastify/dist/ReactToastify.css';
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CreateEditChannel from './Components/pages/Channel/CreateEditChannel';
import VideoUpload from './Components/pages/VideoUpload/VideoUpload';
import { fetchAllChannel } from './actions/ChannelUser';
import { getAllVideo } from './actions/Video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchLater';
import { getAllHistory } from './actions/History';
import { getAllComment } from './actions/comments';
import { ToastContainer } from 'react-toastify';
import { getAllLikedHistory } from './actions/LikedHistory';
const App = () => {
  const dispatch = useDispatch()
  const CurrentUser = useSelector(state => state.currentUserReducer)

  useEffect(() => {
    dispatch(fetchAllChannel())
    dispatch(getAllVideo())
    dispatch(getAlllikedVideo())
    dispatch(getAllwatchLater())
    dispatch(getAllHistory())
    dispatch(getAllComment())
    dispatch(getAllLikedHistory())
  }, [CurrentUser])

  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: 'none'
  })
  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === 'none') {
      setToggleDrawerSidebar({
        display: "flex"
      })
    } else {
      setToggleDrawerSidebar({
        display: "none"
      })
    }
  }
  const [videoUploadPage, setVideoUploadPage] = useState(false)
  const [EditCreateChannelBtn, setEditCreateChannelBtn] = useState(false)
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {videoUploadPage && <VideoUpload setVideoUploadPage={setVideoUploadPage} />}      {EditCreateChannelBtn && <CreateEditChannel setEditCreateChannelBtn={setEditCreateChannelBtn} />}

      <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn} toggleDrawer={toggleDrawer} />
      {
        <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      }
      <AllRoutes setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn} />
    </Router>
  )
}

export default App