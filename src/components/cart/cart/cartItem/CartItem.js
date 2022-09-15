import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../../App'
import './CartItem.css'

export default function CartItem({ id, name, size, price, category, brand, description, image, total, quantity }) {

    // user comes from 'UserContext'
    var { removeFromCart, updateQuantity } = useContext(CartContext)

    function handlePlusClicked() {
        updateQuantity(id, 1, price)
    }

    function handleMinusClicked() {
        if (quantity <= 1) {
            removeFromCart(id);
        } else {
            updateQuantity(id, -1, price)
        }
    }

    return (
        <div>

            <Link className="item" to={"/products/item/" + id} key={id} >
                <div className='product-image'>
                    <img width="150" height="150" src={image} />
                </div>
            </Link>

            <div className='product-info'>
                <div className='total'>${total.toFixed(2)}</div>
                <div className='name'>{name}</div>
                <div className='size'>{size}</div>
            </div>

            <div>
                x{quantity}
            </div>

            <button className='add-item'
                onClick={handleMinusClicked}>
                -
            </button>
            <button className='add-item'
                onClick={handlePlusClicked}>
                +
            </button>
        </div>
    )
}
