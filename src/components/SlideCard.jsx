import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLaptop, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { products } from '../data/data';

const sliderProducts = products.filter(
  (product) =>
    product.category === 'apple'
);

const SlideCard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {sliderProducts.map((product, id) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 flash-product-wrapper" key={id}>
            <div className="single-card-wrap">
              <div className="discount">
                <span>25% off</span>
              </div>
              <img
                src={product.thumbnail}
                alt="watch image"
                className="slide-image"
              />
              <h6>{product.description.slice(0, 20)}</h6>
              <div className="product-icon-wrap">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStarHalfAlt className="star-icon" />
              </div>
              <div className="price-button-wrap">
                <span>${product.price}</span>
                <NavLink to={`/products/${product.id}`} className="buy">Buy Now</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SlideCard;
//This is sliderCard component:::
