import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './global.scss'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
