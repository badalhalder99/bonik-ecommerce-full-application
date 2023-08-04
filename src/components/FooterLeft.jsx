import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
const logo = 'https://bonik-react.vercel.app/assets/images/logo.svg';

const FooterLeft = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="footer-left footer-common">
        <NavLink to='/'>
          <img src={logo} alt="logo image" className="logo" />
        </NavLink>
        <p className="footerInform">
        Shop with confidence on our trusted ecommerce platform. Discover a world of endless possibilities, where you can find the latest trends.
        </p>
        <div className="app-wrap">
          <div className="app-item app-item1">
            <div className="app-icon-wrap">
              <FaGooglePlay className="app-icon" />
            </div>
            <div className="app-inform">
              <p>Get it on </p>
              <h6>Google Play</h6>
            </div>
          </div>
          <div className="app-item">
            <div className="app-icon-wrap">
              <FaAppStoreIos className="app-icon" />
            </div>
            <div className="app-inform">
              <p>Download on the </p>
              <h6>App Store</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterLeft;
