import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider } from './context/global_context';
import { ProductProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
