import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster.tsx";
import App from "@/App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
)
