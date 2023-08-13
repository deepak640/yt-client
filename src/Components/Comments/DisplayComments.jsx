/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Comments.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
const DisplayComments = ({ cId, commentBody, userCommented, userId, commentOn }) => {
  const [Edit, setEdit] = useState(false)
  const [cmtBdy, setcmtBdy] = useState("")
  const [cmtId, setCmtId] = useState("")
  const CurrentUser = useSelector(state => state?.currentUserReducer)
  const handleEdit = (ctID, ctBdy) => {
    setEdit(true)
    setCmtId(ctID)
    setcmtBdy(ctBdy)
  }
  const dispatch = useDispatch()
  const handeOnSubmit = (e) => {
    e.preventDefault()
    if (!cmtBdy) {
      alert("Type Your Comments")
    } else {
      dispatch(editComment({
        id: cmtId,
        commentBody: cmtBdy
      }))
      setcmtBdy("")
    }
    setEdit(false)
  }
  const handleDel = (id) => {
    dispatch(deleteComment(id))
  }
  return (
    <>
      {
        Edit ? <>
          <form onSubmit={handeOnSubmit}
            className="comments_sub_form_comments">
            <input type="text" value={cmtBdy} onChange={(e) => setcmtBdy(e.target.value)} className="comment_ibox" placeholder="edit comment.... " />
            <input type="submit" value="change" className="comment_add_btn_comments" />
          </form>
        </> : <>
          <p className="comment_body">{commentBody}</p>
        </>
      }
      <p className="usercommented"> {" "} - {userCommented} commented {moment(commentOn).fromNow()}</p>
      {
        CurrentUser?.result?._id === userId && (
          <p className="EditDel_DisplayComment">
            <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
            <i onClick={() => handleDel(cId)}>Delete</i>
          </p>
        )
      }
    </>
  )
}

export default DisplayComments