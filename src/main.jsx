import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <App />
  </Provider>
)
