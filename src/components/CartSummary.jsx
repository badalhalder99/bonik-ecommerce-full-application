import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductPolicy from './ProductPolicy';

const CartSummary = () => {
  const [additionalComments, setAdditionalComments] = useState('');
  const [voucherCode, setVoucherCode] = useState('');
  const [voucherApplied, setVoucherApplied] = useState(false);

  const cart = useSelector((state) => state.cart);

  const handleAdditionalCommentsChange = (e) => {
    setAdditionalComments(e.target.value);
  };

  const handleVoucherCodeChange = (e) => {
    setVoucherCode(e.target.value);
  };

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    setVoucherApplied(true);
    setAdditionalComments('');
    setVoucherCode('');
  };
  const handleProceedToCheckout = (e) => {
    e.preventDefault();
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal.toFixed(2);
  };

  return (
    <>
      <div className="cart-summary">
        <div className="total-wrap">
          <p>Total:</p>
          <p>${calculateSubtotal()}</p>
        </div>
        <div className="cart-textarea-wrap">
          <h2 className="section-title">
            Additional Comments <span>Note</span>
          </h2>
          <textarea
            className="comments-textarea"
            value={additionalComments}
            onChange={handleAdditionalCommentsChange}
          />
        </div>
        <div className="voucher-wrap">
          <form onSubmit={handleApplyVoucher} className="voucher-form">
            <input
              type="text"
              value={voucherCode}
              onChange={handleVoucherCodeChange}
              placeholder="voucher"
              className="voucher-input"
              required
            />
            <button type="submit" className="voucher-btn">
              Apply Voucher
            </button>
          </form>
          {voucherApplied && (
            <p className="voucher-success">Voucher successfully applied!</p>
          )}
        </div>
        <div className="checkout-wrap">
          <button onClick={handleProceedToCheckout} className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <ProductPolicy />
    </>
  );
};

export default CartSummary;
