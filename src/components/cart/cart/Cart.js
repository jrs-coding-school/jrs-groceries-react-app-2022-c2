import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'


export default function Cart() {
    return (
        <div>Cart
            <Link to="/checkout">
                <button>Checkout</button>
            </Link>
        </div>
    )
}
