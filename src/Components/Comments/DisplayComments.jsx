/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Comments.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
import { toast } from 'react-toastify';
import { patchlocation } from '../../actions/location';
const DisplayComments = ({ cId, commentBody, userCommented, latitude, longitude, userId, commentOn }) => {
  const [Edit, setEdit] = useState(false)
  const [cmtBdy, setcmtBdy] = useState("")
  const [userLocation, setUserLocation] = useState(JSON.parse(localStorage.getItem('locationAllowed')));
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
  useEffect(() => {
    const locationAllowed = localStorage.getItem('locationAllowed');
    if (!locationAllowed) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            if (userId === CurrentUser?.result._id) {
              setUserLocation({ latitude, longitude });
              console.log('done')
              dispatch(patchlocation({ id: cId, latitude, longitude }))
              const locationData = { latitude, longitude }; // Create an object to hold the values
              const locationDataString = JSON.stringify(locationData); // Convert the object to a JSON string
              localStorage.setItem('locationAllowed', locationDataString); // Store in localStorage
            }
          },
          (error) => {
            toast.error('Location access denied or not available.');
          }
        );
      } else {
        toast.error('Geolocation not supported by your browser.');
      }
    }
    if (userId === CurrentUser?.result._id) {
      const { longitude, latitude } = userLocation
      dispatch(patchlocation({ id: cId, longitude, latitude }))
    }
  }, []);
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
          <p className="comment_body">
            {!longitude && userId === CurrentUser?.result?._id ? (
              <>
                {console.log("up")}
                Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}{' '}
                <a target='_blank' href={`https://www.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}`}>Show</a>
              </>
            ) : (
              <>
                {console.log("down")}
                Latitude: {latitude}, Longitude: {longitude}{' '}
                <a target='_blank' href={`https://www.google.com/maps?q=${latitude},${longitude}`}>Show</a>
              </>
            )}
          </p>
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