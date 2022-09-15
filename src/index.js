import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './components/homePage/HomePage'
import CategoryPage from './components/categoryPage/CategoryPage'
import Cart from './components/cart/cart/Cart'
import CheckoutPage from './components/cart/CheckoutPage/CheckoutPage';
import ItemPage from './components/itemPage/ItemPage';
import CheckoutSuccess from './components/formStep/CheckoutSuccess';
import SearchResult from './components/searchResult/SearchResult';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import CartList from './components/cart/cart/cartList/CartList';
import { ToastProvider } from './components/toasts/ToastService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App />}>

            <Route path="" element={<HomePage />}>
              <Route path="" element={<CategoryPage />} />
              <Route path="/home/:category" element={<CategoryPage />} />
              <Route path="/home/search/:searchParam" element={<SearchResult />} />
            </Route>

            <Route path="/products" element={<CategoryPage />} />
            <Route path="/products/category/:category" element={<CategoryPage />} />
            <Route path="/products/item/:productId" element={<ItemPage />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/cartItems" element={<Cart />} />
            <Route path="/cartItems/:customerId" element={<CartList />} />

            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/checkout/success/:transactionId' element={<CheckoutSuccess />} />

            <Route path="*" element={<NotFoundPage />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
