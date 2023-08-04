import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  addToCart,
} from '../redux/cart/action';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { products } from '../data/data';
import Details from './Details';
import Coupon from './Coupon';

const Product = () => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((product) => product.id === productId);
  const cart = useSelector((state) => state.cart);
  const cartProduct = cart.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  if (!product) {
    return <div>Loading...</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    dispatch(addToCart(productWithQuantity));
    setIsAddedToCart(true);
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-12">
            <p className="single-path">{`Home > ${
              product.category
            } > ${product.title.slice(0, 16)}`}</p>
          </div>
        </div>
        <div className="row single-product-flex">
          <div className="col-md-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="single-img img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1 className="product-name">{product.title.slice(0, 16)}</h1>
            <h2 className="my-4 product-category">
              Category: <span>{product.category}</span>
            </h2>
            <p className="lead">{product.description}</p>
            <h2 className="my-4 product-price">${product.price}</h2>
            <p className="my-4 product-stock">{product.stock} in stock</p>
            <div className="quantity-wrap">
              {cartProduct ? (
                <div className="quantity">
                  <button
                    type="button"
                    className="minus btn"
                    onClick={() => handleDecrementQuantity(product.id)}
                  >
                    -
                  </button>
                  <button type="button" className="product-number btn">
                    {cartProduct.quantity}
                  </button>
                  <button
                    type="button"
                    className="plus btn"
                    onClick={() => handleIncrementQuantity(product.id)}
                  >
                    +
                  </button>
                  {isAddedToCart && (
                    <p className="product-success">Product successfully added!</p>
                  )}
                </div>
              ) : (
                <button
                  className="add-to-cart my-2"
                  type="button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Details
              description={product.description}
              productId={productId}
              rating={product.rating}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3 className="fw-bold related-product">Related Products</h3>
          </div>
        </div>
        <div className="row">
          {relatedProducts.map((p, id) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 popular-product-main"
              key={id}
            >
              <NavLink to={`/products/${p.id}`} className="feature-link">
                <div className="new-product-item discount-product-item feature-product-item related-product-item">
                  <p className="stock">In Stock: {p.stock}</p>
                  <img
                    src={p.thumbnail}
                    alt="women clothes"
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

export default Product;
