import React from 'react';
import { NavLink } from 'react-router-dom';
import EveryCategory from './EveryCategory';
import { FaCaretRight, FaQrcode } from 'react-icons/fa';

const Categories = () => {
  return (
    <section className="newArrivalProductWrap categoriesMainWrap">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaQrcode className="flash-icon1 newArrivalIcon1 giftIcon" />
            <span>Categories</span>
          </div>
          <div className="flash2">
            <NavLink to="/products" className="view">
              View All
            </NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <EveryCategory />
      </div>
    </section>
  );
};
export default Categories;
