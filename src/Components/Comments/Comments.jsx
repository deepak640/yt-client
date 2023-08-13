import { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../actions/comments";
import DisplayComments from './DisplayComments'
const Comments = ({ videoId }) => {
    const [commentText, setCommentText] = useState("")
    const CurrentUser = useSelector(state => state.currentUserReducer)
    const commentsList = useSelector(s => s.commentReducer)
    // const commentsList = [
    //     {
    //         _id:1,
    //         commentBody: "hello",
    //         userCommented: "abc"
    //     },
    //     {
    //         _id:2,
    //         commentBody: "hello",
    //         userCommented: "abc"
    //     },
    //     {
    //         _id:3,
    //         commentBody: "hello",
    //         userCommented: "abc"
    //     },
    // ]
    const dispatch = useDispatch()
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (CurrentUser) {
            if (!commentText) {
                alert("Plz type your comment !")
            } else {
                dispatch(postComment({
                    videoId: videoId,
                    userId: CurrentUser?.result._id,
                    commentBody: commentText,
                    userCommented: CurrentUser?.result.name,
                }))
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
                    commentsList?.data?.filter(q => videoId === q?.videoId).reverse().map((data, i) => {
                        return (
                            <DisplayComments commentOn={data.commentOn} cId={data?._id} key={i} commentBody={data.commentBody} userId={data.userId} userCommented={data.userCommented} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Comments