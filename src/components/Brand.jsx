import React from 'react';
import { FaStar } from 'react-icons/fa';
import Img from './Img';

const brandLink1 =
  'https://bonik-react.vercel.app/assets/images/brands/alibaba.png';
const brandLink2 =
  'https://bonik-react.vercel.app/assets/images/brands/levis.png';
const brandLink3 =
  'https://bonik-react.vercel.app/assets/images/brands/lotto.png';
const brandLink4 =
  'https://bonik-react.vercel.app/assets/images/brands/raymond.png';
const brandLink5 =
  'https://bonik-react.vercel.app/assets/images/brands/samsung.png';

const Brand = () => {
  return (
    <section className="brand-wrap-main">
      <div className="container-fluid">
        <div className="brand-top">
          <FaStar className="brand-icon" />
          <span>Featured Brands</span>
        </div>
        <div className="brandLink">
          <div className="brand-item brand-top">
            <Img src={brandLink1} classname="brandImg" />
          </div>
          <div className="brand-item brand-top">
            <Img src={brandLink2} classname="brandImg" />
          </div>
          <div className="brand-item">
            <Img src={brandLink3} classname="brandImg" />
          </div>
          <div className="brand-item brand-item2">
            <Img src={brandLink4} classname="brandImg" />
          </div>
          <div className="brand-item">
            <Img src={brandLink5} classname="brandImg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Brand;
