import React, { useEffect, useState } from 'react'
import './ItemPage.css'
import http from '../../services/api.service'
import { useParams } from 'react-router-dom'
import LoaderSpin from '../LoaderSpin/LoaderSpin'


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
                <div className="product">
                    <div className="product-image">
                        <img width="150" height="150" src={product.image} />
                    </div>
                    <div className="product-info">
                        <div className="product name">{product.name}</div>
                        <div className="product brand">{product.brand}</div>
                        <div className="product price">{product.price}</div>
                        <div className="product category">{product.category}</div>
                        <div className="product size">{product.size}</div>
                        <div className="product description">{product.description}</div>
                    </div>

                    <button className='add-item'>+ Add to Cart</button>
                </div>
            </div>
        )
    }
}
