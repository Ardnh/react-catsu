import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL
axios.defaults.headers.common['x-api-key'] = import.meta.env.VITE_APP_API_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>,
)
