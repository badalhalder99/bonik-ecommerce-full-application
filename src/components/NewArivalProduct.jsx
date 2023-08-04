import React from 'react';
import NewAllProduct from './NewAllProduct';
import { NavLink } from 'react-router-dom';
import { FaCentos, FaCaretRight } from 'react-icons/fa';

const NewArivalProduct = () => {
  return (
    <section className="newArrivalProductWrap">
      <div className="container-fluid">
        <div className="flashTopWrap">
          <div className="flsh1">
            <FaCentos className="flash-icon1 newArrivalIcon1" />
            <span>New Arrivals</span>
          </div>
          <div className="flash2">
            <NavLink to='/products' className="view">View All</NavLink>
            <FaCaretRight className="flash-icon2" />
          </div>
        </div>
        <NewAllProduct />
      </div>
    </section>
  );
};
export default NewArivalProduct;
