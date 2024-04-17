import React, { useState } from 'react';
import { products } from '../data/data';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Coupon from './Coupon';

const Products = () => {
  const [sortProduct, setSortProduct] = useState('');

  const handleSortChange = (event) => {
    setSortProduct(event.target.value);
  };

  const query = useSelector((state) => state.query) || '';

  // Filter the products based on the selected sort product
  const filteredProducts = sortProducts(sortProduct, products);

  return (
    <>
      <div className="container my-5 py-3 productsContainer">
        <div className="row">
          <div className="col-md-12">
            <div className="product-top-area">
              <h2 className="sortHeading">All Products</h2>
              <label htmlFor="sort-select" className="sortLabel">
                Sort by:{' '}
              </label>{' '}
              <select
                id="sort-select"
                value={sortProduct}
                onChange={handleSortChange}
              >
                <option value="allproduct">All Products</option>
                <option value="popularProducts">Popular Products</option>
                <option value="newReleased">New Released</option>
                <option value="bestSeller">Best Seller</option>
                <option value="lowToHigh">Price: Low To High</option>
                <option value="highToLow">Price: High To Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredProducts
            .filter((product) => product.title.toLowerCase().includes(query))
            .map((p, id) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-12 popular-product-main"
                key={id}
              >
                <NavLink to={`/products/${p.id}`} className="feature-link">
                  <div className="new-product-item discount-product-item feature-product-item related-product-item">
                    <p className="stock">In Stock: {p.stock}</p>
                    <img
                      src={p.thumbnail}
                      alt=""
                      className="new-product-img discount-img featureImage"
                    />
                    <h6 className="feature-title">{p.title.slice(0, 15)}</h6>
                    <p className="feature-description">
                      {p.description.slice(0, 20).toLowerCase()}...
                    </p>
                    <span className="feature-price">${p.price}</span>
                  </div>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
      <Coupon />
    </>
  );
};

// Helper function to sort the products based on the selected criteria
const sortProducts = (sortProduct, products) => {
  switch (sortProduct) {
    case 'allproduct':
      return products;

    case 'popularProducts':
      return products.filter((product) => product.category === 'digital');

    case 'newReleased':
      return products.filter((product) => product.category === 'watch');

    case 'bestSeller':
      return products.filter(
        (product) =>
          product.category === 'televisions' ||
          product.category === 'cameras' ||
          product.category === "women's clothing"
      );

    case 'lowToHigh':
      return products.sort((a, b) => a.price - b.price);

    case 'highToLow':
      return products.sort((a, b) => b.price - a.price);

    default:
      return products;
  }
};

export default Products;
