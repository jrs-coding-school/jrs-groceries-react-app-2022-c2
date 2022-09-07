import React, { useEffect, useState } from 'react'
import './CategoryPage.css'
import http from '../../services/api.service'
import { useParams } from 'react-router-dom'
import CategoryItem from './CategoryItem'

export default function CategoryPage() {

    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()

    }, [category])

    function getProducts() {
        if (category) {
            http.getProductsByCategory(category)
                .then((response) => {
                    setProducts(response.data);
                });
        } else {
            http.getAllProducts()
                .then((response) => {
                    setProducts(response.data);
                });
        }
    }

    return (
        <div className='category-root'>
            <h2>
                {category}
            </h2>
            <div className='products-container'>
                {products.map(p => (
                    <CategoryItem key={p.id} {...p} />
                ))}
                {/* <CategoryItem /> */}
            </div>
        </div>
    )
}
