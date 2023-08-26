import React, { useState } from 'react'
import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux'
import { uploadVideo } from '../../../actions/Video'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const VideoUpload = ({ setVideoUploadPage }) => {
  const [title, setTitle] = useState('')
  const [videoFile, setVideoFile] = useState('')
  const CurrentUser = useSelector(state => state.currentUserReducer)
  const dispatch = useDispatch()
  const handlesetVideoFile = (e) => {
    setVideoFile(e.target.files[0])
  }
  const [progress, setProgress] = useState(0)
  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000))
      setProgress(percentage)
      if (percentage === 100) {
        setTimeout(() => { }, 3000);
        setVideoUploadPage(false)

      }
    }
  }
  const uploadVideoFile = () => {
    if (!title) {
      alert("plz Enter A title of the video")
    } else if (!videoFile) {
      alert('Attach a video File')
    } else {
      const fileref = ref(storage, `videos/${videoFile.name}`)
      const uploadTask = uploadBytesResumable(fileref, videoFile)
      uploadTask.on('state_changed', (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        progress = Math.trunc(progress)
        setProgress(progress)
      }, (error) => console.log(error), () => {
        setVideoUploadPage(false);
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          dispatch(uploadVideo({
            title: title,
            filePath: downloadURL,
            channel: CurrentUser?.result._id,
            Uploader: CurrentUser?.result.name,
          }))
        })
      })
      // const fileData = new FormData()
      // fileData.append('file', videoFile)
      // fileData.append('title', title)
      // fileData.append('channel', CurrentUser?.result._id)
      // fileData.append('Uploader', CurrentUser?.result.name)
    }
  }
  return (
    <div className='container_VideoUpload'>
      <input
        type="submit" name='text' value={'x'} className='ibtn_x' onClick={() => setVideoUploadPage(false)} />
      <div className="container2_VideoUpload">
        <div className="ibox_div_vidUpload">
          <input type="text" onChange={(e) => setTitle(e.target.value)} className='ibox_vidUpload'
            maxLength={30}
            placeholder='Enter Title of your Video'
          />
          <label htmlFor='file' className='ibox_vidUpload btn_vidUpload'>
            <input type="file" onChange={(e) => handlesetVideoFile(e)} name="file"
              className='ibox_vidUpload'
              style={{ fontSize: '1rem' }}
            />
          </label>
        </div>
        <div className="ibox_div_vidUpload">
          <input type="submit" onClick={uploadVideoFile} value="Upload" className='ibox_vidUpload btn_vidUpload' />
        </div>
        <div className="loader ibox_div_vidUpload">
          <CircularProgressbar value={progress} text={`${progress}`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100})`,
              textColor: '#f88',
              trailColor: '#adff2f',
              backgroundColor: '#3e98c7'
            })}
          />
        </div>
      </div>
    </div>
  )
}

export default VideoUpload