import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../../../hooks/UserContext'
import { CartContext } from '../../../App'
import CartList from './cartList/CartList'

export default function Cart() {
    const { activeUser } = useContext(UserContext)
    var { cart, removeFromCart, updateQuantity } = useContext(CartContext)

    return (
        <div> Cart
            <Link to="/checkout" >
                <button>Checkout</button>
            </Link>
            <CartList items={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
        </div >
    )

}
