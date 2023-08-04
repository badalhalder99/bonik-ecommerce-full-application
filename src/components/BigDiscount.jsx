import React from 'react';
import DiscountProduct from './DiscountProduct';
import { NavLink } from 'react-router-dom';
import { FaCaretRight,FaGift } from 'react-icons/fa';

const BigDiscount = () => {
  return (
    <section className="newArrivalProductWrap">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaGift className="flash-icon1 newArrivalIcon1 giftIcon" />
            <span>Big Discounts</span>
          </div>
          <div className="flash2">
            <NavLink to='/products' className="view">View All</NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <DiscountProduct />
      </div>
    </section>
  );
};
export default BigDiscount;

