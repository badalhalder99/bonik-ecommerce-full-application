import React from 'react';
import { NavLink } from 'react-router-dom';

const lists = [
  { id: 1, title: 'careers' },
  { id: 2, title: 'Our Stores' },
  { id: 3, title: 'Our Cares' },
  { id: 4, title: 'Terms & Conditions' },
  { id: 5, title: 'Privacy Policy' }
];

const FooterCenterOne = () => {
  return (
    <div className="col-lg-2 col-md-6 col-sm-6 col-12">
      <div className="footer-center1 footer-common">
        <h3>About Us</h3>
        <ul>
          {lists.map((list, id) => (
            <li key={id}>
              <NavLink className="footer-link-bottom">{list.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterCenterOne;
