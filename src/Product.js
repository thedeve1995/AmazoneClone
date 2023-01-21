import React from 'react';
import './CSS/Product.css';

function Product(props) {
  

  return (
    <div className='product'>
        <div className='product_categories'>
            <img
              src={props.gambar1}
            />
            <p>{props.nama1}</p>
        </div>

        <div className='product_categories'>
          <img
              src={props.gambar2}
            />
            <p>{props.nama2}</p>
        </div>

        <div className='product_categories'>
            <img
              src={props.gambar3}
            />
            <p>{props.nama3}</p>
        </div>

        <div className='product_categories'>
            <img
              src={props.gambar4}
            />
            <p>{props.nama4}</p>
        </div>

        <p className='shop-now'>Shop Now ></p>
        
    </div>
  );
}

export default Product;