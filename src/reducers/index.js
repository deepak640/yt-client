import { combineReducers } from "redux";
import currentUserReducer from "../reducers/currentUser";
import authReducer from '../reducers/auth'
import ChannelReducers from './Channel'
import videoReducer from './video'
import likedVideoReducer from './LikedVideo'
import watchLaterReducer from './watchLater'
import HistoryReducer from './history'
import commentReducer from './comments'
export default combineReducers({
    authReducer,
    currentUserReducer,
    ChannelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
    commentReducer
})