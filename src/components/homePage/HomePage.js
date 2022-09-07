import React from 'react'
import './HomePage.css'
import CategoryList from '../categoryList/CategoryList'
import QuickShopCarousel from '../quickShopCarousel/QuickShopCarousel'

export default function HomePage() {
    return (
        <div>
            <CategoryList />
            <QuickShopCarousel />
        </div>
    )
}
