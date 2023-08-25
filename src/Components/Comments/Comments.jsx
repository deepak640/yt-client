import { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../actions/comments";
import DisplayComments from './DisplayComments'
const API_KEY = import.meta.env.VITE_APP_KEY;
import axios from 'axios';
const Comments = ({ videoId }) => {
    const [commentText, setCommentText] = useState("")
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const commentsList = useSelector(s => s.commentReducer)
    const dispatch = useDispatch()
    const fetch = async (longitude, latitude) => {
        console.log(API_KEY)
        const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${API_KEY}`)
        console.log("🚀 ~ file: Comments.jsx:18 ~ fetch ~ result:", result)
        return result.data.features[0].place_name
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (CurrentUser) {
            if (!commentText) {
                alert("Plz type your comment !")
            } else {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        dispatch(postComment({
                            videoId: videoId,
                            userId: CurrentUser?.result._id,
                            commentBody: commentText,
                            userCommented: CurrentUser?.result.name,
                            address: await fetch(longitude, latitude)
                        }))
                    },
                    async (error) => {
                        const data = await axios.get('http://ip-api.com/json')
                        const result = data.data
                        dispatch(postComment({
                            videoId: videoId,
                            userId: CurrentUser?.result._id,
                            commentBody: commentText,
                            userCommented: CurrentUser?.result.name,
                            address: await fetch(result.lon, result.lat)
                        }))
                    });

                setCommentText("")
            }
        } else {
            alert("plz login to comment")
        }
    }
    return (
        <>
            <form onSubmit={handleOnSubmit} className="comments_sub_form_comments">
                <input type="text" onChange={(e) => setCommentText(e.target.value)} className="comment_ibox" value={commentText} placeholder="add comment.... " />
                <input type="submit" value="add" className="comment_add_btn_comments" />
            </form>
            <div className="display_comment_container">
                {
                    commentsList?.data?.filter(q => videoId === q?.videoId).map((data, i) => {
                        return (
                            <DisplayComments commentOn={data.commentOn} cId={data?._id} key={i} address={data?.address} commentBody={data.commentBody} userId={data.userId} userCommented={data.userCommented} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Comments