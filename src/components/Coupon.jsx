import React, { useState } from 'react';
import { FaRegEnvelope } from 'react-icons/fa';

const couponSrc = 'https://i.ibb.co/17QXNGC/coupon-Img.png';

const Coupon = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="coupon-wrapper">
      <h2>
        Get <span> 20% </span> Off Discount Coupon
      </h2>
      <p>by Subscribe our Newsletter</p>
      <form onSubmit={handleSubmit} className="form-coupon">
        <div className="input-container">
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="input-coupon"
            value={email}
            onChange={handleChange}
          />
          <FaRegEnvelope className="icon-coupon" />
        </div>
        <button type="submit">Get the Coupon</button>
      </form>
      <img src={couponSrc} alt="coupon image" className="coupon-img" />
    </div>
  );
};

export default Coupon;
