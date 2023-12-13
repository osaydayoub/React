import React from 'react'
import productsData from '../data/store'
import './Products.css'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <div className='products-page'>
            <h1>PRODUCTS</h1>
            <div className='products-container'>{
                productsData.map((product) => {
                    return  <Link style={{ textDecoration: 'none'}}  to={`/products/${product.id}`} state={{product}}  key={product.id}><h2 className='H2' key={product.id}>{product.title}</h2></Link>
                    // <h2 key={product.id}>{product.title}</h2>
                })
            }</div>
        </div>
    )
}

export default Products