import React from 'react';
import { FaSistrix, FaShoppingCart, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../redux/search/action'; 

const bottomNavLinks = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Products', path: '/products' },
  { id: 3, title: 'About', path: '/about' },
  { id: 4, title: 'Category', path: '/category' },
  { id: 5, title: 'Contact', path: '/contact' },
];

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <NavLink className="navbar-brand logo-container" to="/">
            <img
              src="https://bonik-react.vercel.app/assets/images/logo.svg"
              className="logo"
              alt="Logo"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="navbar-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              {bottomNavLinks.map((item, id) => (
                <li className="nav-item" key={id}>
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="formGroup" role="search">
              <input
                className="my-input"
                type="search"
                placeholder="Search"
                value={query}
                onChange={handleQuery}
              />
              <FaSistrix className="search-icon" />
            </div>
          </div>
          <div className="shopping-cart-wrap">
            <NavLink to='/cart' className="shopping-cart-button">
              <FaShoppingCart className="shopping-cart" />
              <span className="badge text-bg-danger">{cart.length}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
