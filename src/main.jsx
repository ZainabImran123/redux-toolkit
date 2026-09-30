import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1. IMPORT THESE TWO LINES:
import { Provider } from 'react-redux'
import { store } from './redux/store' // (Make sure this path points to your store file)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. WRAP YOUR APP WITH THE PROVIDER */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)