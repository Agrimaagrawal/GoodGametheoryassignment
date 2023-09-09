import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {AppProvider} from './Context'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-5fo3h7umx04f6jc7.us.auth0.com"
    clientId="4EoykhGziR8HX9C4GZIljrihaaqbOd81"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
    <App />
    </AppProvider>
      </Auth0Provider>,
 
)
