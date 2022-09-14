import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartList from '../cartList/CartList'
import http from '../../../../services/api.service'
import UserContext from '../../../../hooks/UserContext'
import { CartContext } from '../../../../App'

export default function CartPreview() {

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
