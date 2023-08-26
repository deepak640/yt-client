import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_APP_URL;

const API = axios.create({ baseURL: API_BASE_URL });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("Profile")).token
            }`;
    }
    return req;
});
export const login = (authData) => API.post("/users/login", authData);
export const updateChannelDate = (id, updateData) => API.patch(`/users/update/${id}`, updateData);
export const fetchAllChannel = () => API.get('/users/getAllChannels')
export const uploadVideo = (title, filePath, channel, Uploader) => { API.post('/video/uploadVideo', { title, filePath, channel, Uploader }) }
export const getVideos = () => API.get('/video/getvideos')
export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like })
export const viewsVideo = (id) => API.patch(`/video/views/${id}`)
export const addToLikedVideo = (LikedVideoData) => API.post('/video/likedVideo', LikedVideoData)
export const getAlllikedVideo = () => API.get('/video/getAlllikedVideo')
export const deletelikeVideo = (videoId, Viewer) => API.delete(`/video/deletelikedVideo/${videoId}/${Viewer}`)
export const addTowatchLater = (watchLaterData) => API.post('/video/watchLater', watchLaterData)
export const getAllwatchLater = () => API.get('/video/getAllwatchLater')
export const deletewatchLater = (videoId, Viewer) => API.delete(`/video/deletewatchLater/${videoId}/${Viewer}`)
export const addToHistory = (HistoryData) => API.post('/video/History', HistoryData)
export const getAllHistory = () => API.get('/video/getAllHistory')
export const clearHistory = (userId) => API.delete(`/video/clearHistory/${userId}`)

export const addToLikedHistory = (LikedHistoryData) => API.post('/video/LikedHistory', LikedHistoryData)
export const getAllLikedHistory = () => API.get('/video/getAllLikedHistory')
export const clearLikedHistory = (userId) => API.delete(`/video/clearLikedHistory/${userId}`)

export const postComment = (CommentData) => API.post('/comment/post', CommentData)
export const deleteComment = (id) => API.delete(`/comment/delete/${id}`)
export const editComment = (id, commentBody) => API.patch(`/comment/edit/${id}`, { commentBody })
export const getAllComment = () => API.get('/comment/get')

