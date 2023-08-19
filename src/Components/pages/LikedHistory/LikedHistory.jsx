import WHL from '../../WHL/WHL'
import { useSelector } from "react-redux";
const WatchHistory = () => {
    const HistoryList = useSelector(state => state.HistoryReducer)

    return (
        <>
            <WHL page={"Liked History"} videoList={HistoryList} />
        </>
    )
}

export default WatchHistory