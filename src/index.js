import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/productcontext';
import { FilterContextProvider } from '../src/context/filter_context';
import { CartProvider } from './context/cart_context';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
    <ToastContainer/>
  </AppProvider>  
  
);


reportWebVitals();
