import React from 'react'
import './NavBar.css'
import { useBoolean } from '../../hooks/UseBoolean';
import Modal from '../modal/Modal';
import Login from '../login/Login';
import Cart from '../cart/cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {

    const [isModalOpen, toggleModalOpen] = useBoolean(false);
    const [shoppingCart, toggleShoppingCart] = useBoolean(false)


    return (
        <>
            <div className='nav-root'>
                <div className='nav-bar' >
                    <div>Home</div>
                    <div>Search Bar</div>
                    <div>Delivery/Pickup</div>
                    <button onClick={(toggleShoppingCart)}>Cart</button>
                    <button onClick={toggleModalOpen}>Login</button>
                </div>

                {isModalOpen && (
                    <Modal>
                        <Login />
                    </Modal>
                )}

                <div className={`side-menu cart ${shoppingCart ? 'visible' : 'hidden'}`}>
                    <FontAwesomeIcon className='exit' icon={faCircleXmark} onClick={(toggleShoppingCart)}></FontAwesomeIcon>
                    <Cart />
                </div>
            </div>

        </>

    )
}
