import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CartContext, UserContext } from '../../../App'
import CartList from './cartList/CartList'


import './Cart.css'

export default function Cart({ closeShoppingCart }) {

    const { activeUser } = useContext(UserContext)
    const navigate = useNavigate();
    var { cart, removeFromCart, updateQuantity } = useContext(CartContext)

    function onSubmitClicked() {
        // close side menu then
        closeShoppingCart && closeShoppingCart()
        // nav to /checkout
        navigate('/checkout');
    }

    return (
        <div className='cart-root'>
            <h1>Cart</h1>

            <CartList items={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />

            <button onClick={onSubmitClicked}>Checkout</button>
        </div >
    )

}
