import React from 'react'
import './CSS/Checkout.css'

function Checkout () {
    return (
        <div className='checkout'>

            <div className='upcheckout'>

                <div className='shopping__cart'>
                    <div className='cartTitle'>
                        <h1>Shopping Cart</h1>
                        <p>Price</p>
                    </div>
                    <div className='items'>

                    </div>
                    <p className='totalleft'>Subtotal (x items):<b>$xxx</b></p>
                </div>

                <div className='subtotal'>
                    <div className='ptc'>
                        <p>Subtotal <b>Item </b>: <b>$xxx</b>
                        </p>
                        <button>Process to Checkout</button>
                    </div>
                    <div className='item__sugestion'>
                    </div>
                </div> 

            </div>

        </div>
    )
}

export default Checkout