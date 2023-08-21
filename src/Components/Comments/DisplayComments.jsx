/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Comments.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
const DisplayComments = ({ cId, commentBody, userCommented, address, userId, commentOn }) => {
  const [Edit, setEdit] = useState(false)
  const [cmtBdy, setcmtBdy] = useState("")
  // const [userLocation, setUserLocation] = useState(JSON.parse(localStorage.getItem('locationAllowed')) || {});
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
    // const locationAllowed = localStorage.getItem('locationAllowed');
    // const fetch = async (longitude, latitude) => {
    //   const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${API_KEY}`)
    //   return result.data.features[0].place_name
    // }
    // if (!locationAllowed) {
    //   navigator.geolocation.getCurrentPosition(
    //     async (position) => {
    //       const { latitude, longitude } = position.coords;
    //       setUserLocation({ latitude, longitude });
    //       const locationData = { latitude, longitude }; // Create an object to hold the values
    //       const locationDataString = JSON.stringify(locationData); // Convert the object to a JSON string
    //       localStorage.setItem('locationAllowed', locationDataString); // Store in localStorage
    //     },
    //     (error) => {
    //       toast.error('Location access denied or not available.');
    //     }
    //   );

    // }
    // if (userId === CurrentUser?.result._id) {
    //   const { longitude, latitude } = userLocation
    //   fetch(longitude, latitude)
    //     .then(placeName => {
    //       dispatch(patchlocation({ id: cId, address: placeName }));
    //     })
    // }
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
          <p className='comment_body'>{address}</p>
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