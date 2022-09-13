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
        <div className='category-container grid'>
            {categories.map(category => (
                <Link className="category-card" to={`/home/${category}`} key={category} >
                    <CategoryCard category={category} />
                </Link>
            ))}
        </div>

    )
}