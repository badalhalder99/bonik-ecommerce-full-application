import React from 'react';
import Slider from './Slider';
import FlashDealProducts from './FlashDealProducts';
import NewArivalProduct from './NewArivalProduct';
import BigDiscount from './BigDiscount';
import Categories from './Categories';
import Banner from './Banner';
import FeaturedProduct from './FeaturedProduct';
import PopularProduct from './PopularProduct';
import Brand from './Brand';
import ShopService from './ShopService';
import Coupon from './Coupon';
import BestSeller from './BestSeller';

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularProduct />
      <BigDiscount />
      <Categories />
      <NewArivalProduct />
      <FlashDealProducts />
      <Banner />
      <FeaturedProduct />
      <BestSeller />
      <Brand />
      <ShopService />
      <Coupon />
    </div>
  );
};
export default Home;
