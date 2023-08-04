import React from 'react';
import { NavLink } from 'react-router-dom';

const lists3 = [
  { id: 1, title: 'Help Center' },
  { id: 2, title: 'How to Buy' },
  { id: 3, title: 'Track Your Order' },
  { id: 4, title: 'Corporate & Bulk Purchasing' },
  { id: 5, title: 'Returns & Refunds' }
];

const FooterCenterTwo = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
      <div className="footer-center2 footer-common footer-common2 footer-common3">
        <h3>Customer Care</h3>
        <ul>
          {lists3.map((list, id) => (
            <li key={id}>
              <NavLink className="footer-link-bottom">{list.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterCenterTwo;
