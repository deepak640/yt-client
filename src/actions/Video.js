import * as api from '../api'

export const uploadVideo = (videoData) => async (dispatch) => {
    try {
        const { title, filePath, channel, Uploader } = videoData
        const { data } = await api.uploadVideo(title, filePath, channel, Uploader)
        dispatch({ type: 'POST_VIDEO', data })
        dispatch(getAllVideo())

    } catch (error) {
        alert(error.response.data.message)
    }
}

export const getAllVideo = () => async (dispatch) => {
    try {
        const { data } = await api.getVideos()
        dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data })
    } catch (error) {
        console.log(error);
    }

}

export const likeVideo = (LikeDate) => async (dispatch) => {
    try {
        const { id, Like } = LikeDate
        const { data } = await api.likeVideo(id, Like)
        dispatch({ type: "POST_LIKE", payload: data })
        dispatch(getAllVideo())
    } catch (error) {
        console.log(error)
    }
}

export const viewsVideo = (viewDate) => async (dispatch) => {
    try {
        const { id } = viewDate
        const { data } = await api.viewsVideo(id)
        dispatch({ type: 'POST_VIEWS', data })
        dispatch(getAllVideo())
    } catch (error) {
        console.log(error)
    }
}