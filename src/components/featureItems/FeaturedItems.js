import React, { useEffect, useState } from 'react'
import './FeaturedItems.css'
import http from '../../services/api.service'
import HorizontalProductDisplay from '../productDisplays/HorizontalProductDisplay';

export default function FeaturedItems() {

    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        getFeaturedProducts()
    }, [featuredProducts])

    function getFeaturedProducts() {
        http.getFeaturedProducts()
            .then((response) => {
                setFeaturedProducts(response.data)
            })
    };

    return (
        <div className='featured-products-root'>
            <HorizontalProductDisplay title="Featured Products" products={featuredProducts} />
        </div>
    )
}
