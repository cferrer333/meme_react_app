import { HashRouter, Routes, Route } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './config/auth0.config';
import './main.css';
function App() {  
    return (   
        
        <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
        <link rel="stylesheet" href="main.css" />
      <HashRouter>
        <Navbar />
          <Routes>
            { routes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <route.component />
                }
              />
            )) }
          </Routes>
      </HashRouter> 
        </Auth0Provider>
         );
}
  
export default App;