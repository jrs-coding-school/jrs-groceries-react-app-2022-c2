import React from 'react'
import './CategoryList.css'
import CategoryCard from '../categoryCard/CategoryCard'

export default function CategoryList() {

    let categories = ["meat", "produce", "dairy"]

    let catList = categories.map((category) => {
        return <CategoryCard category={category} />
    })

    return (
        <div>
            <div className='cat-container flex'>
                {catList}
            </div>
        </div>
    )
}
