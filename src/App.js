import './App.css';
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import Footer from './components/footer/Footer';
import { createContext, useEffect, useState } from 'react';
import http from './services/api.service'
import { ToastProvider, useToasts } from './components/toasts/ToastService';

export const UserContext = createContext(null);
export const CartContext = createContext(null);

function App() {

  const [activeUser, setActiveUser] = useLocalStorage('activeUser');
  const [cart, setCart] = useState([])
  const toast = useToasts();

  useEffect(() => {
    if (activeUser) {
      getCart();
    }
  }, [])

  function login(newUser) {
    setActiveUser(newUser)
  }

  function logout() {
    setActiveUser(null);
  }

  function removeFromCart(itemId) {
    http.removeFromCart(activeUser.id, itemId)
      .then(res => {
        setCart(cart.filter(item => item.id !== itemId));
      })
      .catch(error => {
        // handle error
      });

  }

  function addToCart({ id, price, size, name, image, category, description, brand }, quantity) {
    if (checkItemIsAlreadyInCart(id)) {
      updateQuantity(id, quantity, price)
    } else {
      http.addToCart(activeUser.id, id, price * quantity, quantity)
        .then(results => {
          setCart([...cart, { id, price, size, name, image, category, description, brand, quantity, total: price }]);
          toast.success('Item was added to cart');
        }).catch(err => {
          console.error(err);
          // setWasItemAdded(false);
        }).finally(() => {
          console.log('added to cart');
          // setItemAdded(true)
        });
    }

  }

  function updateQuantity(itemId, amount, price) {
    http.increaseQuantity(activeUser.id, itemId, price)
      .then(results => {
        // update state after api is updated
        setCart(cart.map(item => {
          if (item.id == itemId) {
            return {
              ...item,
              quantity: item.quantity + amount,
              total: item.total + (amount * price)
            }
          } else {
            return item
          }
        }));
      }).catch(err => {
        console.error(err);
        // setWasItemAdded(false);
      }).finally(() => {
        console.log('added to cart');
        // setItemAdded(true)
      });


  }

  function getCart() {
    // use active user id
    http.getCartItemsByUserId(activeUser.id)
      .then(results => {
        results.data?.length > 0 && setCart(results.data);
      })
      .catch(err => {
        // handle error here
      });
  }

  function checkItemIsAlreadyInCart(itemid) {
    return cart.find(item => item.id === itemid)
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
