import React from 'react';
import './CSS/CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import CurrencyFormat from 'react-currency-format';


function CheckoutProduct({ id, gambar, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={gambar} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <CurrencyFormat
                        renderText={(price) => (
                            <strong>{price}</strong>
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rp"}
                    />
                    
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p><i className='fa-solid fa-star'></i></p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                <hr></hr>
            </div>
        </div>
    )
}

export default CheckoutProduct