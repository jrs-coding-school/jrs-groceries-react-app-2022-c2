import React, { useEffect, useRef, useState } from 'react'
import './CategoryPage.css'
import http from '../../services/api.service'
import { useParams } from 'react-router-dom'
import CategoryItem from './CategoryItem'
import HorizontalProductDisplay from '../productDisplays/HorizontalProductDisplay'

export default function CategoryPage() {

    const { category } = useParams();
    // look for a query
    const [products, setProducts] = useState([]);
    const itemsRef = useRef(null);

    useEffect(() => {
        itemsRef.current.scrollIntoView({ behavior: 'smooth' })
    }, []);

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
        <div className='category-root' ref={itemsRef}>
            <HorizontalProductDisplay title={category} products={products} />
        </div>
    )
}

