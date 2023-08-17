const locationReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'PATCH_LOCATION':
            return { ...state };

        default:
            return state;
    }
}
export default locationReducer