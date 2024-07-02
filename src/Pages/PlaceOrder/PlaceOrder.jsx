import React, { useContext } from 'react'
import "./PlaceOrder.css"
import {assets} from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div>
      <div className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-field">
                    <input type="text" name='firstName' placeholder='First name' />
                    <input type="text" name='lastName' placeholder='Last name' />
                </div>
                <input type="email" name='email' placeholder='Email address' />
                <input type="text" name='street' placeholder='Street' />
                <div className="multi-field">
                    <input type="text" name='city' placeholder='City' />
                    <input type="text" name='zipcode' placeholder='Zip code' />
                </div>
                <input type="text" name='phone' placeholder='Phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                          <p>Subtotal</p>
                          <p>${getTotalCartAmount()}</p>
                          </div>
                        <hr />
                        <div className="cart-total-details">
                          <p>Delivery Fee</p>
                          <p>${5}</p>
                          </div>
                        <hr />
                        <div className="cart-total-details">
                          <b>Total</b>
                          <b>${getTotalCartAmount() + 5}</b>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder
