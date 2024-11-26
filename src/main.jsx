import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; 

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-1xfsqf7g5rllf75a.us.auth0.com"
    clientId="wFU0DUUbuAiWimz73HZge2cazo1MpwPj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    
  <BrowserRouter >
    <App />
  </BrowserRouter >,
  </Auth0Provider>
)
