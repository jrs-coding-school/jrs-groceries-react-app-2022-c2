import './App.css';
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import UserContext from './hooks/UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import Footer from './components/footer/Footer';
import { createContext, useEffect, useState } from 'react';
import http from './services/api.service'

export const CartContext = createContext(null);

function App() {

  const [activeUser, setActiveUser] = useLocalStorage('activeUser');

  const [cart, setCart] = useState([])

  useEffect(() => {
    getCart();
  }, [])

  function login(newUser) {
    setActiveUser(newUser)
  }
  function logout() {
    setActiveUser(null);
  }
  function removeFromCart(itemId) {
    setCart(cart.filter(item => item.id !== itemId))
  }
  function addToCart(newItem) {
    setCart([...cart, newItem]);
  }
  function updateQuantity(itemId, amount) {
    setCart(cart.map(item => {
      if (item.id == itemId) {
        return {
          ...item,
          quantity: item.quantity + amount
        }
      } else {
        return item
      }
    }))
  }

  function getCart() {
    // use active user id
    http.getCartItemsByUserId(activeUser.id)
      .then(results => {
        console.log(results.data)
        results.data?.length > 0 && setCart(results.data);
      })
      .catch(err => {
        // handle error here
      });
  }


  return (
    <UserContext.Provider value={{ activeUser, login, logout }}>
      <CartContext.Provider value={{ cart, removeFromCart, addToCart, updateQuantity }}>
        <div className="App">
          <main>
            <NavBar />
            <Outlet />
          </main>
          <Footer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
