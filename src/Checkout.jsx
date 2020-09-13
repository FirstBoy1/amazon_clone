import React from 'react';
import { useStateValue } from './StateProvider';

import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src="" alt="" />

        {basket.length === 0 ? (
          <div>
            <h1>Your shopping basket is empty</h1>
            <p>
              You have no items in your basket. To buy one or more items click
              "Add to basket" to the item
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello {user?.email}</h3>
            <h1 className="checkout__title">Your shopping basket</h1>

            {basket.map((item) => (
              <CheckoutProduct key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">{basket.length && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
