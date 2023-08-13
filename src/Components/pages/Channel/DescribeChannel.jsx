import React from 'react'
import { FaEdit, FaUpload } from "react-icons/fa";
import './Describe.css'
import { useSelector } from 'react-redux'
const DescribeChannel = ({ setEditCreateChannelBtn, Cid, setVideoUploadPage }) => {
    const channels = useSelector((state) => state.ChannelReducers)
    const currentChannel = channels.filter(c => c._id === Cid)[0]
    const CurrentUser = useSelector(state => state.currentUserReducer)
    return (
        <div className='container3_channel'>
            <div className="channel_logo_channel">
                <b>
                    {currentChannel?.name.charAt(0).toUpperCase()}
                </b>
            </div>
            <div className="description_channel">
                <b>{currentChannel?.name}</b>
                <p>{currentChannel?.desc}</p>
            </div>
            {
                CurrentUser?.result._id === currentChannel?._id &&
                <>
                    <p className="editbtn_channel" onClick={() => setEditCreateChannelBtn(true)}>
                        <FaEdit />
                        <b>Edit Channel</b>
                    </p>
                    <p className="uploadbtn_channel" onClick={() => setVideoUploadPage(true)}>
                        <FaUpload />
                        <b>upload video</b>
                    </p>
                </>
            }
        </div>
    )
}

export default DescribeChannel