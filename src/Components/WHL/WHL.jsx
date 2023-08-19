import './Whl.css'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import WHLVideoList from './WHLVideoList'
import { useSelector, useDispatch } from 'react-redux'
import { clearHistory } from "../../actions/History";
import { clearLikedHistory } from '../../actions/LikedHistory';
const WHL = ({ page, videoList }) => {
  const CurrentUser = useSelector(state => state.currentUserReducer)
  const dispatch = useDispatch()
  const handleClearHistory = () => {
    if (CurrentUser) {
      dispatch(clearHistory({
        userId: CurrentUser?.result._id
      }))
    }
  }
  const handleClearLikedHistory = () => {
    if (CurrentUser) {
      dispatch(clearLikedHistory({
        userId: CurrentUser?.result._id
      }))
    }
  }
  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <p className="container_whl">
          <span className="box_WHL leftside_whl">
            <b>Your {page} Shown here</b>
            {
              page === "History" &&
              <span className="clear_History_btn" onClick={() => handleClearHistory()}>Clear History</span>
            }
            {
              page === "Liked History" &&
              <span className="clear_History_btn" onClick={() => handleClearLikedHistory()}>Clear LikedHistory</span>
            }
          </span>
          <span className="rightSide_whl">
            <h1>{page}</h1>
            <span className="whl_list">
              <WHLVideoList CurrentUser={CurrentUser?.result._id} page={page} videoList={videoList} />
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export default WHL