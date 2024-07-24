import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import './global.scss'
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "@/components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        <Toaster/>
    </BrowserRouter>
  </React.StrictMode>,
)
