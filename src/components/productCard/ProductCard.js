import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App.js'
import UserContext from '../../hooks/UserContext.js'
import http from '../../services/api.service.js'
import './ProductCard.css'

export default function ProductCard({ name, price, size, image, id, category, brand, description }) {

    // user comes from 'UserContext'
    const { activeUser } = useContext(UserContext)
    const { addToCart } = useContext(CartContext)
    // const [setItemAdded, setWasItemAdded] = useState(false)

    function handleAddToCartClicked() {
        console.log('adding to cart');
        // add to cart by sending an http request
        // send the item id, user id, quantity (1), and price as parameters
        http.addToCart(activeUser.id, id, price)
            .then(results => {
                addToCart({ id, price, size, name, image, category, description, brand, quantity: 1, total: price })
            }).catch(err => {
                console.error(err);
                // setWasItemAdded(false);
            }).finally(() => {
                console.log('added to cart');
                // setItemAdded(true)
            });
    }

    return (
        <div className='product-card'>

            <Link className="item" to={"/products/item/" + id} key={id} >
                <div className='product-image'>
                    <img width="150" height="150" src={image} />
                </div>

                <div className='product-info'>
                    <div className='price'>${price.toFixed(2)}</div>
                    <div className='name'>{name}</div>
                    <div className='size'>{size}</div>
                </div>
            </Link>

            <button className='add-item'
                onClick={handleAddToCartClicked}>
                + Add to Cart
            </button>
        </div>
    )
}
