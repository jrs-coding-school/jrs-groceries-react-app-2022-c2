import React from 'react'
import ProductCard from '../productCard/ProductCard'
import './FlexProductDisplay.css'

export default function FlexProductDisplay({ title, products }) {
    return (
        <div className='flex-display-root'>
            <h2 className='title'>
                {title}:
            </h2>

            <div className='products-container'>
                {products.map(p => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </div>
        </div >
    )
}
