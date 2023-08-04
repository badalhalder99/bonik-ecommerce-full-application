import React from 'react';
import BestSellerAll from './BestSellerAll';
import { NavLink } from 'react-router-dom';
import { FaCaretRight, FaShopify } from 'react-icons/fa';

const BestSeller = () => {
  return (
    <section className="newArrivalProductWrap best-seller">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaShopify className="flash-icon1 newArrivalIcon1 giftIcon featureIcon" />
            <span>Best Seller</span>
          </div>
          <div className="flash2 flash3">
            <NavLink to="/products" className="view">
              View All
            </NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <BestSellerAll />
      </div>
    </section>
  );
};
export default BestSeller;
