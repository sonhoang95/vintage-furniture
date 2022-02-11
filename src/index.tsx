import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider } from './context/global_context';
import { ProductProvider } from './context/products_context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
