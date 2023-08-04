import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { products } from '../data/data';

const newProducts = products.filter(
  (product) => product.category === 'digital'
);

const PopularProductAll = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {newProducts.map((product, id) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 popular-product-main"
            key={id}
          >
            <div className="popular-product-wrap">
              <NavLink to={`/products/${product.id}`} className="popular-link">
                <img
                  src={product.thumbnail}
                  alt="women clothes"
                  className="new-product-img discount-img popular-img"
                />
                <h6 className="feature-title">{product.title.slice(0, 15)}</h6>
                <p className="feature-description">
                  {product.description.slice(0, 65)}
                </p>
                <div className="popular-product-footer">
                  <span className="feature-price">${product.price}</span>
                  <button className="feature-link popular-go-shop">
                    Add to Cart
                  </button>
                </div>
              </NavLink>
              <img
                src="https://i.ibb.co/syFRmc9/download-2-removebg-preview-1.png"
                alt="special offer image"
                className="super-deal-wrap"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProductAll;
