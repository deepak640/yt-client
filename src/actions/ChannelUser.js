import * as api from '../api'

export const fetchAllChannel = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllChannel()
        dispatch({ type: 'FETCH_CHANNELS', payload: data })
    } catch (error) {
        console.log(error);
    }
}
export const updateChannelDate = (id, updateDate) => async (dispatch) => {
    try {
        const { data } = await api.updateChannelDate(id, updateDate)
        dispatch({ type: 'UPDATE_DATA', payload: data })
    } catch (error) {
        alert(error)
    }
}