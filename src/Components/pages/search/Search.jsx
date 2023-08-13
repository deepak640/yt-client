import { useParams } from 'react-router-dom';
import LeftSideBar from '../../LeftSideBar/LeftSideBar'
import ShowVideoGrid from '../../ShowVideoGrid/ShowVideoGrid'
import '../Home/Home.css'
import { useSelector } from "react-redux";
const Search = () => {
    const { searchQuery } = useParams()
    const vids = useSelector(state => state.videoReducer)?.data?.filter(q => q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse()
    return (
        <div className="container_Pages_App">
            <LeftSideBar />
            <div className="container2_Pages_App">
                <h2 style={{color:"white"}}>Search Results for {searchQuery} ...</h2>
                <ShowVideoGrid vids={vids} />
            </div>
        </div>
    )
}

export default Search

