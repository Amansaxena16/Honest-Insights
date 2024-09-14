import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'  
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-8sgeby7a8y0stf8w.us.auth0.com"
      clientId="sLZyYVtHDTCl6g6Bfh4S6AegHe7DEx0f"
      authorizationParams={{
        redirect_uri: window.location.origin + "/dashboard"
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
