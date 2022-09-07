import React, { useEffect, useState } from 'react'
import './QuickShopCarousel.css'
import http from '../../services/api.service'
import CategoryItem from '../categoryPage/CategoryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
export default function QuickShopCarousel() {

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

    const featuredProductCarousel = featuredProducts.map(p => (
        <CategoryItem key={p.id} {...p} />
    ))

    return (
        <div className='carousel-root'>
            <h2>Featured Items</h2>

            <div className='carousel-actual'>
                <div className='icon left'>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                </div>
                <div className='featured-products-container'>
                    {featuredProductCarousel}
                    {/* <CategoryItem /> */}
                </div>
                <div className='icon right'>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    )
}
