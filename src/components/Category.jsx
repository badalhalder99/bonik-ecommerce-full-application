import React from 'react';
import Coupon from './Coupon';
import EveryCategory from './EveryCategory';

const Category = () => {
  return (
    <>
      <div className="categoriesTopWrapper"> 
        <EveryCategory />
      </div>
      <div className="component-margin">
        <Coupon />
      </div>
    </>
  );
};

export default Category;
