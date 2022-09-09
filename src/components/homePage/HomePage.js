import React from 'react'
import './HomePage.css'
import CategoryList from '../categoryList/CategoryList'
import { Outlet } from 'react-router-dom'
import FeaturedItems from '../featureItems/FeaturedItems'

export default function HomePage() {
    return (
        <div className="homepage-root">

            <div className="image-container">
                <img className="home-image" src="https://st2.depositphotos.com/1011382/8088/i/450/depositphotos_80880248-stock-photo-red-fresh-produce-vegetables-and.jpg" alt="Produce Section of a grocery store" />
                <img className="home-image" src="https://st3.depositphotos.com/27298046/31795/i/450/depositphotos_317950912-stock-photo-bunch-colorful-leaves-pods-food.jpg" alt="Produce Section of a grocery store" />
                <img className="home-image" src="https://st.depositphotos.com/28515578/55068/i/450/depositphotos_550689724-stock-photo-organic-vegetables-herbs-brown-abstract.jpg" alt="Produce Section of a grocery store" />
            </div>
            <FeaturedItems />
            <div className="centered">A new way to shop</div>
            <CategoryList />
            <Outlet />
        </div>
    )
}
