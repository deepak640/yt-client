import ShowVideo from "../ShowVideo/ShowVideo"
import './ShowVideoGrid.css'
const ShowVideoGrid = ({ vids }) => {
    return (
        <div className="Container_ShowVideoGrid">
            {
                vids?.map((data,i) => {
                    return <div key={data._id} className="video_box_app">
                        <ShowVideo vid={data} />
                    </div>
                })
            }
        </div>
    )
}

export default ShowVideoGrid