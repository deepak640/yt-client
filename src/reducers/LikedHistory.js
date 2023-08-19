const LikedHistoryReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'POST_LIKEDHISTORY':
            return { ...state, data: action?.data };
        case 'FETCH_ALL_LIKEDHISTORY_VIDEOS':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default LikedHistoryReducer