import React from 'react';
import FooterLeft from './FooterLeft';
import FooterCenterOne from './FooterCenterOne';
import FooterCenterTwo from './FooterCenterTwo';
import FooteRight from './FooteRight';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid footer-container">
        <div className="row">
          <FooterLeft/>
          <FooterCenterOne/>
          <FooterCenterTwo/>
          <FooteRight/>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
