import { combineReducers } from "redux";
import currentUserReducer from "../reducers/currentUser";
import authReducer from '../reducers/auth'
import ChannelReducers from './Channel'
import videoReducer from './video'
import likedVideoReducer from './LikedVideo'
import watchLaterReducer from './watchLater'
import HistoryReducer from './history'
import LikedHistoryReducer from './LikedHistory'
import commentReducer from './comments'
import locationReducer from './location'
export default combineReducers({
    authReducer,
    currentUserReducer,
    ChannelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    LikedHistoryReducer,
    commentReducer,
    locationReducer
})