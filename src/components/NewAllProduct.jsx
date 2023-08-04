import React from 'react';
import { NavLink } from 'react-router-dom';
import { products } from '../data/data';
import { FaPlus } from 'react-icons/fa';

const newProducts = products.filter(
  (product) => product.category === "electronics"
);

const NewAllProduct = () => {
  return (
    <section className="new-product-wrap">
      <div className="container-fluid">
        <div className="new-product-wrapper">
          {newProducts.map((product, id) => (
            <div className="new-product-item" key={id}>
              <img
                src={product.thumbnail}
                alt="women clothes"
                className="new-product-img"
              />
              <h6>{product.title.slice(0, 15)}</h6>
              <div className="price-buy-wrap">
                <p>${product.price}</p>
                <NavLink to={`/products/${product.id}`} className="new-buy">
                  <FaPlus className='plusIcon' />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewAllProduct;
