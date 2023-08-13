import React from 'react'
import { useSelector } from "react-redux";
import WHL from '../../WHL/WHL'
const LikedVideo = () => {
  const likedVideoList = useSelector(state => state.likedVideoReducer)
  return (
    <>
      <WHL page={"likedVideo"} videoList={likedVideoList} />
    </>
  )
}

export default LikedVideo