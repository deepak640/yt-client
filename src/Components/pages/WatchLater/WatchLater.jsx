import React from 'react'
import WHL from '../../WHL/WHL'
import { useSelector } from 'react-redux'
const WatchLater = () => {
  const watchLaterList = useSelector(state => state.watchLaterReducer)
  return (
    <>
      <WHL page={"Watch Later"} videoList={watchLaterList} />
    </>
  )
}

export default WatchLater