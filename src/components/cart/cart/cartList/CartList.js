import React from 'react'
import CartItem from '../cartItem/CartItem'
import './CartList.css'

export default function CartList({ items, removeFromCart, updateQuantity }) {

    return (
        <div className='cart-items-container'>
            {items?.map(item => (
                <CartItem key={item.id} {...item}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                />
            ))}
        </div>
    )
}
