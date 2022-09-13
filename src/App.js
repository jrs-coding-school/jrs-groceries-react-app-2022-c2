import './App.css';
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar/NavBar';
import UserContext from './hooks/UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import Footer from './components/footer/Footer';

function App() {

  const [activeUser, setActiveUser] = useLocalStorage('activeUser');

  function login(newUser) {
    setActiveUser(newUser)
  }
  function logout() {
    setActiveUser(null);
  }

  return (
    <UserContext.Provider value={{ activeUser, login, logout }}>

      <div className="App">
        <main>
          <NavBar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
