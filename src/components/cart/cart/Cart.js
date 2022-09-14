import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import CartList from './cartList/CartList'


export default function Cart() {
    return (
        <div>Cart
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
            <CartList />
        </div>
    )
}
