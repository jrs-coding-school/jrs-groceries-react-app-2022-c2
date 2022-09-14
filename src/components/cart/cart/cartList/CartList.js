import React, { useContext } from 'react'
import { CartContext } from '../../../../App'
import CartItem from '../cartItem/CartItem'
import './CartList.css'

export default function CartList() {

    var { cart } = useContext(CartContext)
    return (
        <div className='cart-items-container'>
            {cart?.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
    )
}
