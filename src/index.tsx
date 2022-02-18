import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider } from './context/global_context';
import { ProductProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context';

// dev-hdktp5on.us.auth0.com
// mnBGn2ZLl7RryRoc3o3hODwuBUTwBTpI

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hdktp5on.us.auth0.com"
      clientId="mnBGn2ZLl7RryRoc3o3hODwuBUTwBTpI"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <GlobalProvider>
          <ProductProvider>
            <FilterProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </FilterProvider>
          </ProductProvider>
        </GlobalProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
