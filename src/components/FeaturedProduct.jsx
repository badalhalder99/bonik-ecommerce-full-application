import React from 'react';
import FeaturedProductAll from './FeaturedProductAll';
import { NavLink } from 'react-router-dom';
import { FaCaretRight, FaShoppingBasket } from 'react-icons/fa';

const FeaturedProduct = () => {
  return (
    <section className="newArrivalProductWrap">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaShoppingBasket className="flash-icon1 newArrivalIcon1 giftIcon featureIcon" />
            <span>Featured Products</span>
          </div>
          <div className="flash2 flash3">
            <NavLink to="/products" className="view">
              View All
            </NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <FeaturedProductAll />
      </div>
    </section>
  );
};
export default FeaturedProduct;
