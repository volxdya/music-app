import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster.tsx";
import App from "@/App.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
