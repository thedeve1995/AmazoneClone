import React from 'react';
import './CSS/Purchase.css'


function Purchase (props) {
    return(
        <div className='purchase'>
            <div className='img'>
            <img
                src={props.gambar}
            />
            </div>
            <p className='title'>
                {props.title}
            </p>
            <p className='rating'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
            </p>
            <p className='price'>
                <sup>
                    $
                </sup>
                <strong>
                    {props.price}
                </strong>
            </p>
            <button>Add to Basket</button>
        </div>
    )
}

export default Purchase