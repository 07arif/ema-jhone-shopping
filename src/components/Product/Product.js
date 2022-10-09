import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = (props) => {
    const {product,handleAddToCart}=props;
    const {name, img, seller, price, ratings}=product;
    return (
        <div className='product'>
           
            <img src={img} alt=''/>
           
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} Stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;