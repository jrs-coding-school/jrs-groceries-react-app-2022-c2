import React from 'react'
import './CategoryList.css'
import CategoryCard from '../categoryCard/CategoryCard'
import { Link } from 'react-router-dom'

export default function CategoryList() {

    let categories = [
        "Dairy & Eggs",
        "Fruit",
        "Vegetables",
        "Meat & Seafood",
        "Frozen",
        "Bakery",
        "Beverages",
        "Snacks & Candy",
        "Deli",
        "Dry Goods",
        "Condiments & Sauces",
        "Canned Goods",
        "Household",
        "Oils, Vinegars, Spices",
        "Alcohol",
        "Health Care"
    ]

    return (
        <div className='cat-container flex'>
            {categories.map(category => (
                <Link className="cat-card" to={`/home/${category}`} key={category} >
                    <CategoryCard category={category} />
                </Link>
            ))}
        </div>

    )
}