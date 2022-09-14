import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../../../hooks/UserContext'
import http from '../../../../services/api.service.js'
import './CartItem.css'

export default function CartItem({ id, name, size, price, category, brand, description, image, total, quantity, removeFromCart, updateQuantity }) {

    console.log(id, quantity, name)
    // user comes from 'UserContext'
    const { activeUser } = useContext(UserContext)
    const { addToCart } = useState(true)

    function handlePlusClicked() {
        console.log('adding to cart');
        // add to cart by sending an http request
        // send the item id, user id, quantity (1), and total as parameters
        http.increaseQuantity(activeUser.id, id, total)
            .then(results => {
                updateQuantity(id, 1)
            }).catch(err => {
                console.error(err);
                // setWasItemAdded(false);
            }).finally(() => {
                console.log('added to cart');
                // setItemAdded(true)
            });
    }
    function handleMinusClicked() {
        if (quantity <= 1) {
            http.removeFromCart(activeUser.id, id)
                .then(res => {
                    removeFromCart(id);
                })
                .catch(error => {
                    // handle error
                });
        } else {
            http.decreaseQuantity(activeUser.id, id, price)
                .then(results => {
                    updateQuantity(id, -1)
                }).catch(err => {
                    console.error(err);
                    // setWasItemAdded(false);
                }).finally(() => {
                    console.log('added to cart');
                    // setItemAdded(true)
                });
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
                <div className='total'>${total}</div>
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
