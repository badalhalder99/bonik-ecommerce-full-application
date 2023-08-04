import React from 'react';
import Img from './Img';
import { Link } from 'react-router-dom';

const src = 'https://i.ibb.co/gFTS0NN/ads-1.png';
const src2 = 'https://i.ibb.co/wMsVmnn/ads-2.png';

const Banner = () => {
  return (
    <section className="banner-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <Link to="/products">
              <Img src={src} />
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/products">
              <Img src={src2} classname="banner-img2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
