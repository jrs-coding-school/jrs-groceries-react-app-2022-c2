import React, { useEffect, useState } from 'react'
import './ItemPage.css'
import http from '../../services/api.service'
import { Link, useParams } from 'react-router-dom'
import LoaderSpin from '../LoaderSpin/LoaderSpin'
import CategoryItem from '../categoryPage/CategoryItem'


export default function ItemPage() {

    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [relatedItems, setRelatedItems] = useState([])
    console.log(product);

    useEffect(() => {
        getProductById()
    }, [productId])

    function getProductById() {

        http.getProductsById(productId)
            .then((response) => {
                setProduct(response.data)

                !product && getProductsByCategory(response.data?.category)

            })
            .catch(err => {
                console.error(err)
            })
    }

    function getProductsByCategory(category) {
        console.log('getting items');
        http.getProductsByCategory(category)
            .then((response) => {
                setRelatedItems(response.data);
            });
    }

    if (product == undefined) {
        return <LoaderSpin />
    } else {
        return (
            <div className="product-container">
                <Link className="back" to="/">Back</Link>

                <div className="product-main">
                    <div className="product-actual">


                        <div className="product-image">
                            <img width="300" height="300" src={product.image} />
                        </div>
                        <div className="product-information">
                            <div className="product-name">{product.name}</div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-category">{product.category}</div>

                            <div className="product-description">{product.description}</div>
                        </div>
                    </div>

                    <div className='product-selection'>
                        <div className="product-data">
                            <div className="product-price">${product.price}</div>
                            <div className="product-size">{product.size}</div>
                            <input className="product-quantity" type="number" min="1"></input>
                            <div className="quantity-prompt">Quantity</div>
                        </div>

                        <button className='product-add-item'>+ Add to Cart</button>

                    </div>

                </div>
                <div className="related-items">
                    <h2>Items like this:</h2>
                    <div className="more-products">
                        {relatedItems.filter(p => p.id !== product.id)
                            .map(p => (
                                <CategoryItem className="cat-item" key={p.id} {...p} />
                            ))}
                    </div>
                </div>

            </div>
        )
    }
}
