import React, { useContext } from 'react'
import './NavBar.css'
import { useBoolean } from '../../hooks/UseBoolean';
import Modal from '../modal/Modal';
import Login from '../login/Login';
import Cart from '../cart/cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faHouse, faRightFromBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../../hooks/UserContext';
import { Link } from 'react-router-dom';


export default function NavBar() {

    const { activeUser, logout } = useContext(UserContext)

    const [isModalOpen, toggleModalOpen] = useBoolean(false);
    const [shoppingCart, toggleShoppingCart] = useBoolean(false)

    const [isMethodDelivery, toggleMethod] = useBoolean(true);

    return (
        <>
            <div className='nav-root'>
                <div className='nav-bar' >
                    <div className='left'>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} className='home-button icon'>
                            </FontAwesomeIcon>
                        </Link>
                        <input type="text" className='search-bar' />
                    </div>

                    <div className='right'>
                        <div className='method'>
                            <div
                                className={`delivery ${isMethodDelivery ? 'selected' : ''}`}
                                onClick={(toggleMethod)}>
                                Delivery
                            </div>
                            <div
                                className={`pick-up ${isMethodDelivery ? '' : 'selected'}`}
                                onClick={(toggleMethod)}>
                                Pick Up
                            </div>
                        </div>
                        {activeUser
                            ? (
                                <>
                                    <div>{activeUser.email}</div>
                                    <button className='cart icon' onClick={(toggleShoppingCart)}>
                                        <FontAwesomeIcon
                                            icon={faCartShopping}>
                                        </FontAwesomeIcon>
                                    </button>
                                    <button onClick={logout} className="logout icon">
                                        <FontAwesomeIcon
                                            icon={faRightFromBracket} >
                                        </FontAwesomeIcon>
                                    </button>
                                </>
                            )
                            :
                            <div>
                                <button className='cart' onClick={(toggleShoppingCart)}>
                                    <FontAwesomeIcon
                                        icon={faCartShopping}>
                                    </FontAwesomeIcon>
                                </button>

                                <button onClick={toggleModalOpen}>Login</button>
                            </div>
                        }

                    </div>





                </div>



                {isModalOpen && (
                    <Modal>
                        <Login onLogin={() => {
                            // close modal
                            toggleModalOpen();
                        }} />
                    </Modal>
                )}

                <div className={`side-menu cart ${shoppingCart ? 'visible' : 'hidden'}`}>
                    <FontAwesomeIcon
                        className='exit'
                        icon={faCircleXmark}
                        onClick={(toggleShoppingCart)}>

                    </FontAwesomeIcon>
                    <Cart />
                </div>
            </div>

        </>

    )
}
