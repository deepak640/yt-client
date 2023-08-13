import React from 'react'
import ShowVideoGrid from '../../ShowVideoGrid/ShowVideoGrid'
import LeftSideBar from '../../LeftSideBar/LeftSideBar'
import DescribeChannel from './DescribeChannel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Channel = ({ setEditCreateChannelBtn, setVideoUploadPage }) => {
    const { Cid } = useParams()
    const vids = useSelector(state => state.videoReducer)?.data?.filter(q => q.videoChannel === Cid).reverse()

    return (
        <div className="container_Pages_App">
            <LeftSideBar />
            <div className="container2_Pages_App">
                <DescribeChannel setVideoUploadPage={setVideoUploadPage} Cid={Cid} setEditCreateChannelBtn={setEditCreateChannelBtn} />
                <ShowVideoGrid vids={vids} />
            </div>
        </div>
    )
}

export default Channel