import React from 'react';
import PopularProductAll from './PopularProductAll';
import { NavLink } from 'react-router-dom';
import { FaCaretRight,FaRegSun } from 'react-icons/fa';

const PopularProduct = () => {
  return (
    <section className="newArrivalProductWrap popularProductWraper">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaRegSun className="flash-icon1 newArrivalIcon1 giftIcon" />
            <span>Popular Products</span>
          </div>
          <div className="flash2 flash3">
            <NavLink to='/products' className="view">View All</NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <PopularProductAll />
      </div>
    </section>
  );
};
export default PopularProduct;
