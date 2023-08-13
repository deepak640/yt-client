import { BsThreeDots } from "react-icons/bs";
import { MdPlaylistAddCheck } from "react-icons/md";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from "react-icons/ri";
import './LikedWatchLaterSaveBtns.css'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { likeVideo } from "../../../actions/Video";
import { addTolikedVideo, deletelikedVideo } from "../../../actions/likedVideo";
import { addTowatchLater, deletewatchLater } from "../../../actions/watchLater";
const LikedWatchLaterSaveBtns = ({ vv, vid }) => {
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const dispatch = useDispatch()
    const [saveVideo, setSaveVideo] = useState(false)
    const [DislikeBtn, setDislikeBtn] = useState(false)
    const [LikeBtn, setLikeBtn] = useState(false)
    const watchLaterList = useSelector(state => state.watchLaterReducer)

    const toggleSavedVideo = () => {
        if (CurrentUser) {

            if (saveVideo) {
                setSaveVideo(false)
                dispatch(deletewatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))
            } else {
                setSaveVideo(true)
                dispatch(addTowatchLater({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))
            }
        } else {
            alert("Plz Login to save the video")
        }
    }

    const toggleLikeBtn = (e, lk) => {
        if (CurrentUser) {
            if (LikeBtn) {
                setLikeBtn(false)
                dispatch(likeVideo({ id: vid, Like: lk - 1 }))
                dispatch(deletelikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))

            } else {
                setLikeBtn(true);
                dispatch(likeVideo({ id: vid, Like: lk + 1 }))
                dispatch(addTolikedVideo({
                    videoId: vid,
                    Viewer: CurrentUser?.result._id
                }))
                setDislikeBtn(false);
            }
        } else { alert("Plz Login to Give a Like") }
    }
    const toggleDisLikeBtn = (e, lk) => {
        if (CurrentUser) {
            if (DislikeBtn) {
                setDislikeBtn(false)
            } else {
                setDislikeBtn(true);

                if (LikeBtn) {
                    dispatch(likeVideo({ id: vid, Like: lk - 1 }))
                    dispatch(deletelikedVideo({
                        videoId: vid,
                        Viewer: CurrentUser?.result._id
                    }))
                }
                setLikeBtn(false)
            }
        } else { alert("Plz Login to Give a Like") }
    }
    const likedVideoList = useSelector(state => state.likedVideoReducer)

    useEffect(() => {
        likedVideoList?.data?.filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m => setLikeBtn(true))
        watchLaterList?.data?.filter(q => q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m => setSaveVideo(true))
    }, [])

    return (
        <div className="btns_cont_videoPage">
            <div className="btn_VideoPage">
                <BsThreeDots />
            </div>
            <div className="btn_VideoPage">
                <div className="like_videoPage" onClick={(e) => toggleLikeBtn(e, vv.Like)}>
                    {
                        LikeBtn ? <>
                            <AiFillLike size={22} className="btns_videoPage" />
                        </>
                            : <>
                                <AiOutlineLike size={22} className="btns_videoPage" />
                            </>
                    }
                    <b>{vv?.Like}</b>
                </div>
                <div className="like_videoPage" onClick={(e) => toggleDisLikeBtn(e, vv.Like)}>
                    {
                        DislikeBtn ? <>
                            <AiFillDislike size={22} className="btns_videoPage" />
                        </>
                            : <>
                                <AiOutlineDislike size={22} className="btns_videoPage" />
                            </>
                    }
                    <b>DISLIKE</b>
                </div>
                <div className="like_videoPage" onClick={toggleSavedVideo}>
                    {
                        saveVideo ? <>
                            <MdPlaylistAddCheck size={22} className="btns_videoPage" />
                            <b>Saved</b>
                        </>
                            : <>
                                <RiPlayListAddFill size={22} className="btns_videoPage" />
                                <b>Save</b>
                            </>
                    }
                </div>
                <div className="like_videoPage">
                    <RiHeartAddFill size={22} className="btns_videoPage" />
                    <b>Thanks</b>
                </div>
                <div className="like_videoPage">
                    <RiShareForwardLine size={22} className="btns_videoPage" />
                    <b>Share</b>
                </div>
            </div>
        </div>
    )
}

export default LikedWatchLaterSaveBtns