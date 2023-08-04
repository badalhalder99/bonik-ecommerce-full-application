import React from 'react';
import SlideCard from './SlideCard';
import { NavLink } from 'react-router-dom';
import { FaGetPocket, FaCaretRight } from 'react-icons/fa';

const FlashDealProducts = () => {
  return (
    <section className="flashProductWrap">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaGetPocket className="flash-icon1" />
            <span>Flash Deals</span>
          </div>
          <div className="flash2">
            <NavLink to='/products' className="view">View All</NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <SlideCard />
      </div>
    </section>
  );
};
export default FlashDealProducts;
