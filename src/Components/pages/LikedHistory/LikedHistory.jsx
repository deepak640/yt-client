import WHL from '../../WHL/WHL'
import { useSelector } from "react-redux";
const LikedHistoryHistory = () => {
    const LikedHistoryList = useSelector(state => state.LikedHistoryReducer)

    return (
        <>
            <WHL page={"Liked History"} videoList={LikedHistoryList} />
        </>
    )
}

export default LikedHistoryHistory