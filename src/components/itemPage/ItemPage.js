import React, { useContext, useEffect, useState } from 'react'
import './ItemPage.css'
import http from '../../services/api.service'
import { Link, useParams } from 'react-router-dom'
import LoaderSpin from '../LoaderSpin/LoaderSpin'
import FlexProductDisplay from '../productDisplays/FlexProductDisplay'
import { CartContext } from '../../App'


export default function ItemPage() {

    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [quantityInput, setQuantityInput] = useState(1)
    const [relatedItems, setRelatedItems] = useState([])
    const { addToCart } = useContext(CartContext)


    function handleAddToCartClicked() {
        // add to cart by sending an http request
        // send the item id, user id, quantity (1), and price as parameters
        addToCart(product, quantityInput)
    }

    useEffect(() => {
        getProductById()
    }, [productId])

    function getProductById() {

        http.getProductById(productId)
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
                <Link className="back hover" to="/">Back</Link>

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
                            <div>
                                <div className="product-price">${product.price.toFixed(2)}</div>
                                <div className="product-size">{product.size}</div>
                            </div>
                            <div>
                                <input
                                    className="product-quantity"
                                    type="number"
                                    value={quantityInput}
                                    onChange={(e) => {
                                        setQuantityInput(Number(e.target.value))
                                    }}
                                    min="1"
                                />
                                <div className="quantity-prompt">Quantity</div>
                            </div>
                        </div>

                        <button
                            className='product-add-item hover'
                            onClick={handleAddToCartClicked}
                        >
                            + Add to Cart
                        </button>

                    </div>

                </div>
                <FlexProductDisplay title="Items like this" products={relatedItems} />

            </div>
        )
    }
}
