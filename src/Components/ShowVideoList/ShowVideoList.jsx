import React from 'react'
import { useSelector } from "react-redux";
import ShowVideo from '../ShowVideo/ShowVideo'
const ShowVideoList = ({ videoId }) => {
    const vids = useSelector(state => state.videoReducer)
    return (
        <div className="Container_ShowVideoGrid">
            {
                vids?.data?.filter((q) => q._id === videoId).reverse().map((data, i) => {
                    return <div key={data._id} className="video_box_app">
                        <ShowVideo vid={data} />
                    </div>
                })
            }
        </div>
    )
}

export default ShowVideoList