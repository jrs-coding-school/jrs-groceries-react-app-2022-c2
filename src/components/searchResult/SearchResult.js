import React, { useEffect, useRef, useState } from 'react'
import './SearchResult.css'
import http from '../../services/api.service'
import { useParams } from 'react-router-dom';
import FlexProductDisplay from '../productDisplays/FlexProductDisplay';

export default function SearchResult() {

    const { searchParam } = useParams();
    // look for a query
    const [products, setProducts] = useState([]);
    const itemsRef = useRef(null);

    useEffect(() => {
        itemsRef.current.scrollIntoView({ behavior: 'smooth' })
    })

    useEffect(() => {
        getProducts()
    }, [searchParam])

    function getProducts() {
        http.searchProducts(searchParam)
            .then((response) => {
                setProducts(response.data)
            })
    }

    return (
        <div className='search-results-root' ref={itemsRef}>
            <FlexProductDisplay title={`Results for '${searchParam}'`} products={products} />
        </div>
    )
}
