import * as api from '../api'
export const patchlocation = (locationDate) => async (dispatch) => {
    try {
        const { id, address } = locationDate
        const { data } = await api.patchlocation(id, address)
        dispatch({ type: "PATCH_LOCATION", payload: data })
    } catch (error) {
        console.log(error)
    }
}