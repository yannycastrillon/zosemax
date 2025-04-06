import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/global.scss";

const app = document.getElementById("app") as HTMLElement;
if(!app) throw new Error("app element not found");

createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
