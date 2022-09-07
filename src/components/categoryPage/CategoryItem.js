import React from 'react'
import './CategoryItem.css'

export default function CategoryItem({ name, price, size, image }) {
    return (
        <div className='product-card'>

            <div className='product-image'>
                <img width="150" height="150" src={image} />
            </div>
            <div className='product-info'>
                <div className='price'>${price}</div>
                <div className='name'>{name}</div>
                <div className='size'>{size}</div>
            </div>
            <button className='add-item'>+ Add to Cart</button>

        </div>

    )
}
