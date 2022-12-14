import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext, UserContext } from '../../App.js'
import http from '../../services/api.service.js'
import { useToasts } from '../toasts/ToastService.js'
import './ProductCard.css'

export default function ProductCard({ name, price, size, image, id, category, brand, description }) {

    const { activeUser } = useContext(UserContext);
    const { addToCart } = useContext(CartContext)
    // const [setItemAdded, setWasItemAdded] = useState(false)
    const toast = useToasts();

    function handleAddToCartClicked() {
        if (activeUser) {
            console.log('adding to cart');
            // add to cart by sending an http request
            // send the item id, user id, quantity (1), and price as parameters
            addToCart({ id, price, size, name, image, category, description, brand }, 1)
        } else {
            toast.warn("You must be signed in to add items to your shopping cart.")
        }
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
