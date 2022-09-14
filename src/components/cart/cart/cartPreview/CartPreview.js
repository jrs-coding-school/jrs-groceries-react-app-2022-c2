import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartList from '../cartList/CartList'
import http from '../../../../services/api.service'
import UserContext from '../../../../hooks/UserContext'

export default function CartPreview() {

    const { activeUser } = useContext(UserContext)
    const [cart, setCart] = useState([])

    function removeFromCart(itemId) {
        setCart(cart.filter(item => item.id !== itemId))
    }

    function updateQuantity(itemId, amount) {
        setCart(cart.map(item => {
            if (item.id == itemId) {
                return {
                    ...item,
                    quantity: item.quantity + amount
                }
            } else {
                return item
            }
        }))
    }

    useEffect(() => {
        getCart();
    }, [])

    function getCart() {
        // use active user id
        http.getCartItemsByUserId(activeUser.id)
            .then(results => {
                console.log(results.data)
                results.data?.length > 0 && setCart(results.data);
            })
            .catch(err => {
                // handle error here
            });
    }

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
