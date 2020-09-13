import React from 'react';

import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ item: { id, title, price, rating, image } }) {
  const [, dispatch] = useStateValue();

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <span role="img" aria-label="rating">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={() => dispatch({ type: 'REMOVE_FROM_BASKET', id })}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
