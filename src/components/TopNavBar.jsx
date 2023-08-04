import React from 'react';
import { FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const topLinks = [
  { id: 1, title: 'Account', path: '/' },
  { id: 2, title: 'Track Order', path: '/' },
  { id: 3, title: 'Support', path: '/' },
];
const TopNavBar = () => {
  return (
    <div className="top-nav-wrap">
      <div className="container-fluid">
        <div className="nav-content-wrap">
          <div className="nav-content-item">
            <p className="itemLeft itemLeft1">
              <FaPhoneAlt className="top-nav-icon" /> +88012 3456 7894
            </p>
            <p className="itemLeft">
              <FaRegEnvelope className="top-nav-icon" /> support@ui-lib.com
            </p>
          </div>
          <div className="nav-content-item2">
            <ul>
              {topLinks.map((link, id) => (
                <li key={id}>
                  <NavLink to={link.path} className={`top-nav-link${id === 0 ? ' first-link' : ''}`}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNavBar;
