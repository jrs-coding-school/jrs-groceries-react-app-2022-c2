import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ name, price, size, image, id }) {
    return (
        <div className='product-card'>

            <Link className="item" to={"/products/item/" + id} key={id} >
                <div className='product-image'>
                    <img width="150" height="150" src={image} />
                </div>

                <div className='product-info'>
                    <div className='price'>${price}</div>
                    <div className='name'>{name}</div>
                    <div className='size'>{size}</div>
                </div>
            </Link>

            <button className='add-item'>+ Add to Cart</button>
        </div>
    )
}
