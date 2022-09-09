import React, { useEffect, useRef, useState } from 'react'
import './CategoryPage.css'
import http from '../../services/api.service'
import { useParams } from 'react-router-dom'
import CategoryItem from './CategoryItem'

export default function CategoryPage() {

    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const itemsRef = useRef(null);

    useEffect(() => {
        itemsRef.current.scrollIntoView({ behavior: 'smooth' })
    })

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
            <div
                className='products-container'
                ref={itemsRef} >
                {products.map(p => (
                    <CategoryItem key={p.id} {...p} />
                ))}

            </div>
        </div >
    )
}

function CategoryList({ category }) {

    const [items, setItems] = useState([])
}