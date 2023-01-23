import React, { useState } from 'react'
import './CSS/Purchase.css'
import Checkout from './Checkout'
import { useStateValue } from './StateProvider'

const Purchase = ({ gambar, title, rating, price }) => {
    const [{ basket }, dispatch] = useStateValue();
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                
                title: title,
                rating: rating,
                gambar: gambar,
                price: price,
            },
        });
    };

  return (
    <div className='purchase'>
      <img src={gambar} alt={title} className='img' />
      <p className='title'>{title}</p>
      <p className='rating'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <i 
              key={i} 
              className={`fa-solid fa-star${ratingValue > rating ? '-hal-stroke' : ''}`}
            />
          );
        })}
      </p>
      <p className='price'>
        <sup>$</sup>
        <strong>{price}</strong>
      </p>
      <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Purchase
