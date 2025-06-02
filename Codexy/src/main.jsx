import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import '../global.css';


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);