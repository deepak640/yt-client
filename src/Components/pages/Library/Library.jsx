import LeftSideBar from '../../LeftSideBar/LeftSideBar'
import './library.css'
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import WHLVideoList from '../../WHL/WHLVideoList';
import { AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';
const Library = () => {
  const watchLaterList = useSelector(state => state.watchLaterReducer)
  const likedVideoList = useSelector(state => state.likedVideoReducer)
  const CurrentUser = useSelector(state => state.currentUserReducer)
  const HistoryList = useSelector(state => state.HistoryReducer)


  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList CurrentUser={CurrentUser?.result._id} page={"History"} videoList={HistoryList} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList CurrentUser={CurrentUser?.result._id} page={"WatchLater"} videoList={watchLaterList} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videos</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLVideoList CurrentUser={CurrentUser?.result._id} page={"Liked Videos"} videoList={likedVideoList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library