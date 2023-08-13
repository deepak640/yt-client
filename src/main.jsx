import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import { GoogleOAuthProvider } from '@react-oauth/google';
const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      {/* <GoogleOAuthProvider clientId='612635271383-2el1p1dtk99nht4tou4sldnns02hot9o.apps.googleusercontent.com'> */}
    {/* <React.StrictMode> */}
        <App />
    {/* </React.StrictMode> */}
      {/* </GoogleOAuthProvider> */}
  </Provider>
)
