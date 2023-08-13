import React from 'react'
import ShowVideoGrid from '../../ShowVideoGrid/ShowVideoGrid';
import LeftSideBar from '../../LeftSideBar/LeftSideBar';
import { useSelector } from "react-redux";
import './YourVideo.css'
const YourVideo = () => {
  const CurrentUser = useSelector(state => state.currentUserReducer)
  const vids = useSelector(state => state.videoReducer)?.data?.filter(q => q.videoChannel === CurrentUser?.result?._id).reverse()
  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <div className="container_yourvideo">
          <h1>Your Video</h1>
          {
            CurrentUser ? 
            <ShowVideoGrid vids={vids} />
           : <h3>Login to see your videos</h3>
          }
        </div>
      </div>
    </div>
  )
}

export default YourVideo