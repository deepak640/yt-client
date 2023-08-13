import * as api from '../api'
export const addTowatchLater = (watchLaterData) => async (dispatch) => {
    try {
        const { data } = await api.addTowatchLater(watchLaterData);
        dispatch({ type: "POST_WATCHLATER", data });
        // dispatch(getAllwatchLater())
    } catch (error) {
        console.log(error);
    }
}

export const getAllwatchLater = () => async (dispatch) => {
    try {
        const { data } = await api.getAllwatchLater()
        dispatch({ type: 'FETCH_ALL_WATCHLATER_VIDEOS', payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const deletewatchLater = (watchLaterData) => async (dispatch) => {
    try {
        const { videoId, Viewer } = watchLaterData
        await api.deletewatchLater(videoId,Viewer)
        dispatch(getAllwatchLater())
    } catch (error) {
        console.log(error)
    }
}