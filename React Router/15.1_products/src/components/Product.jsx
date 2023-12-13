import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function Product() {
    const location = useLocation()
    return (
        <div className='newProduct-container products-page'>
            <h1>{location.state.product.title}</h1>
            <h3>{location.state.product.size}</h3>
            {console.log(location.state.product.imageUrl)}
            <img src={location.state.product.imageUrl} alt="product-img" />
            <h3>{location.state.product.price}</h3>
            <Link  style={{ textDecoration: 'none', color: "rgb(213, 156, 41)",fontSize:'larger'}} to={-1}>Back</Link>
        </div>
    )
}

export default Product