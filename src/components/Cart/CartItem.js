import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price,  currency }) => {
    return (
        <div className="cart-item">
          <span className="cart-item__name">{name}</span>
          <span className="cart-item__price">{' $  '}{price.toFixed(2)} {currency}</span>
          <span className="cart-item__quantity">{name.quantity}</span>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    ' $  ': PropTypes.string,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    quantity: PropTypes.number,
}

export default CartItem;
