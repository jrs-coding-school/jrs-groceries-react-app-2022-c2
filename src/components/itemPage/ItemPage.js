import React, { useEffect, useState } from 'react'
import './ItemPage.css'
import http from '../../services/api.service'
import { useParams } from 'react-router-dom'
import LoaderSpin from '../LoaderSpin/LoaderSpin'
el / QuickShopCarousel'


export default function ItemPage() {

    const { productId } = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById()
    }, [])

    function getProductById() {

        http.getProductsById(productId)
            .then((response) => {
                setProduct(response.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    if (product == undefined) {
        return <LoaderSpin />
    } else {
        return (
            <div className="product-container">
                <button className="back">Back</button>

                <div className="product-main">
                    <div className="product-actual">


                        <div className="product-image">
                            <img width="300" height="300" src={product.image} />
                        </div>
                        <div className="product-info">
                            <div className="product name">{product.name}</div>
                            <div className="product brand">{product.brand}</div>
                            <div className="product category">{product.category}</div>

                            <div className="product description">{product.description}</div>
                        </div>
                    </div>

                    <div className='product-selection'>
                        <div className="product-data">
                            <div className="product price">${product.price}</div>
                            <div className="product size">{product.size}</div>
                            <input className="quantity" type="number" min="1"></input>
                        </div>

                        <button className='add-item'>+ Add to Cart</button>

                    </div>
                </div>
                <div className="related-items">
                    <h2>Items like this:</h2>

                </div>
            </div>
        )
    }
}
