import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { products } from '../data/data';

const newProducts = products.filter(
  (product) => product.category === 'digital'
);

const BestSellerAll = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {newProducts.map((product, id) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 popular-product-main"
            key={id}
          >
            <NavLink to={`/products/${product.id}`} className="feature-link">
              <div className="new-product-item discount-product-item feature-product-item">
                <p className="stock">In Stock: {product.stock}</p>
                <img
                  src={product.thumbnail}
                  alt="women clothes"
                  className="new-product-img discount-img featureImage"
                />
                <h6 className="feature-title">{product.title.slice(0, 15)}</h6>
                <p className="feature-description">
                  {product.description.slice(0, 20).toLowerCase()}...
                </p>
                <span className="feature-price">${product.price}</span>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerAll;
