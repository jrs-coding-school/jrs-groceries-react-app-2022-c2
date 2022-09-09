import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navBar/NavBar'
import CategoryPage from './components/categoryPage/CategoryPage'
import Cart from './components/cart/cart/Cart'
import CheckoutPage from './components/cart/CheckoutPage/CheckoutPage';
import ItemPage from './components/itemPage/ItemPage';
import CheckoutSuccess from './components/formStep/CheckoutSuccess';
import SearchResult from './components/searchResult/SearchResult';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />}>
            <Route path="/home/:category" element={<CategoryPage />} />
            <Route path="/home/search/:searchParam" element={<SearchResult />} />
          </Route>
          <Route path="/products" element={<CategoryPage />} />
          <Route path="/products/category/:category" element={<CategoryPage />} />
          <Route path="/products/item/:productId" element={<ItemPage />} />

          <Route path="/cart" element={<Cart />} />

          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/checkout/success' element={<CheckoutSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
