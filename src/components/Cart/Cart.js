import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, dollars, currency }) => {

    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ol>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} />
                                  </li>
                                ))}
                            </ol>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Zero items in Cart</div>
                        )}
                        <div className="cart__total">Total:{' $ '}{total}{currency}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    '$': PropTypes.string,
    total: PropTypes.number,
    currency: PropTypes.string,
}

export default Cart;
