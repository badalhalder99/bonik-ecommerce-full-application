import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGoogle,
} from 'react-icons/fa';

const contacts = [
  {
    id: 1,
    title: '70 Washington Square South, New York, NY 10012, United States',
  },
  { id: 2, title: 'Email: uilib.help@gmail.com' },
  { id: 3, title: 'Phone: +1 1123 456 780' },
];

const socialLinks = [
  { id: 1, tag: <FaFacebookF className="socials-icon" /> },
  { id: 2, tag: <FaTwitter className="socials-icon" /> },
  { id: 3, tag: <FaYoutube className="socials-icon" /> },
  { id: 4, tag: <FaInstagram className="socials-icon" /> },
  { id: 5, tag: <FaGoogle className="socials-icon" /> },
];

const FooteRight = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
      <div className="footer-right footer-common footer-common2">
        <h3>Contact Us</h3>
        <ul>
          {contacts.map((contact, id) => (
            <li key={id}>
              <p>{contact.title}</p>
            </li>
          ))}
        </ul>
        <div className="footer-social-icon-wrap">
          {socialLinks.map((socialLink, id) => (
            <span key={id}>
              <NavLink
                className={`footer-social-icon${
                  id === socialLinks.length-1 ? ' last-icon' : ''
                }`}
              >
                {socialLink.tag}
              </NavLink>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FooteRight;
