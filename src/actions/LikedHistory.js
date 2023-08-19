import * as api from '../api'
export const addToLikedHistory = (LikedHistoryData) => async (dispatch) => {
    try {
        const { data } = await api.addToLikedHistory(LikedHistoryData);
        dispatch({ type: "POST_LIKEDHISTORY", data });
        dispatch(getAllLikedHistory())
    } catch (error) {
        console.log(error);
    }
}

export const getAllLikedHistory = () => async (dispatch) => {
    try {
        const { data } = await api.getAllLikedHistory()
        dispatch({ type: 'FETCH_ALL_LIKEDHISTORY_VIDEOS', payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const clearLikedHistory = (LikedHistoryData) => async (dispatch) => {
    try {
        const { userId } = LikedHistoryData
        await api.clearLikedHistory(userId)
        dispatch(getAllLikedHistory())
    } catch (error) {
        console.log(error)
    }
}