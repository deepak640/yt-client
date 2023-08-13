import './VideoPage.css'
import LikedWatchLaterSaveBtns from './LikedWatchLaterSaveBtns';
import Comments from '../../Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { addToHistory } from '../../../actions/History';
import { useEffect } from 'react';
import { viewsVideo } from '../../../actions/Video';
const VideoPage = () => {
    const { vid } = useParams()
    const vids = useSelector(state => state.videoReducer)?.data
    const vv = vids?.filter(q => q._id === vid)[0]
    console.log("🚀 ~ file: VideoPage.jsx:14 ~ VideoPage ~ vv:", vv)
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const dispatch = useDispatch()
    const handleHistory = () => {
        dispatch(
            addToHistory(
                {
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }
            )
        )
    }
    const handleViews = (vw) => {
        dispatch(viewsVideo({
            id: vid
        }))
    }
    useEffect(() => {
        if (CurrentUser) {
            handleHistory()
        }
        handleViews()
    }, [])

    return (
        <>
            <div className="container_videoPage">
                <div className="container2_videoPage">
                    <div className="video_display_screen_videoPage">
                        <video src={`https://ytclone-p7p4.onrender.com/${vv?.filePath.split('-').slice(2).join('-')}`} className={"video_ShowVideo_videoPage"} controls></video>
                        <div className="video_details_videoPage">
                            <div className="video_btns_title_VideoPage_cont">
                                <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                                <div className="views_date_btns_VideoPage">
                                    <div className="views_videoPage">
                                        {vv?.Views} Views  <div className="dot"></div>  {moment(vid?.createdAt).fromNow()}
                                    </div>
                                    <LikedWatchLaterSaveBtns vv={vv} vid={vid} />
                                </div>
                            </div>
                            <Link to={`/channel/${vv?.videoChannel}`} className="channel_details_videoPage">
                                <b className="channel_logo_videoPage">
                                    <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                                </b>
                                <p className="channel_name_videoPage">{vv?.Uploader}</p>
                            </Link>
                            <div className="comments_VideoPage">
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comments videoId={vv?._id} />
                            </div>
                        </div>
                    </div>
                    <div className="moreVideoBar">
                        More Video
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage