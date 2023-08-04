import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/cart/action';
import CartSummary from './CartSummary';
import { FaXmark } from 'react-icons/fa6';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  return (
    <div className="container-fluid cart-container">
      <div className="row">
        <div className="col-md-7">
          {cart.length === 0 ? (
            <div className="empty-card-wrap">
              <img
                src="https://i.ibb.co/02GDdL2/92601585568-removebg-preview.png"
                alt="empty-card"
              />
              <h5>Your cart is empty!</h5>
              <p className="empty-card-p">
                Looks like you have not added anything to you cart.Go ahead &
                explore top categories.
              </p>
            </div>
          ) : (
            cart.map((singleProduct) => (
              <div className="checkout-cart-wrap" key={singleProduct.id}>
                <div className="checkout-cart-img">
                  <img
                    src={singleProduct.thumbnail}
                    alt={singleProduct.title}
                  />
                </div>
                <div className="checkout-cart-title">
                  <p className="checkout-cart-p">
                    {singleProduct.title.slice(0, 15)}
                  </p>
                  <p className="checkout-cart-p checkout-cart-p2">
                    Price: {singleProduct.price}
                  </p>
                </div>
                <div className="checkout-cart-actions">
                  <button
                    onClick={() => handleDecrementQuantity(singleProduct.id)}
                    className="increment-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{singleProduct.quantity}</span>
                  <button
                    onClick={() => handleIncrementQuantity(singleProduct.id)}
                    className="decrement-btn"
                  >
                    +
                  </button>
                </div>
                <div className="checkout-remove">
                  <button
                    onClick={() => handleRemoveFromCart(singleProduct.id)}
                    className="remove-btn"
                  >
                    <FaXmark className="remove-icon" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="col-md-5">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
