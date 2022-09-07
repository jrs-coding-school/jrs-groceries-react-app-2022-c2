import React, { useState } from 'react'
import './CategoryCard.css'

export default function CategoryCard({ category }) {


    return (
        <div className='category'>
            {category}
        </div>
    )
}

