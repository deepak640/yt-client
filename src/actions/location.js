import * as api from '../api'
export const patchlocation = (locationDate) => async (dispatch) => {
    try {
        const { id, latitude, longitude } = locationDate
        const { data } = await api.patchlocation(id, latitude, longitude)
        dispatch({ type: "PATCH_LOCATION", payload: data })
    } catch (error) {
        console.log(error)
    }
}