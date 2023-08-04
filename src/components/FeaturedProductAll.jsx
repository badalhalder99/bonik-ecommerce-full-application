import React, { useEffect } from 'react';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { NavLink } from 'react-router-dom';
import { products } from '../data/data';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const newProducts = products.filter(
  (product) =>
    product.category === 'televisions' ||
    product.category === 'cameras' ||
    product.category === "women's clothing"
);

const FeaturedProductAll = () => {
  useEffect(() => {
    const swiper = new SwiperCore('.mySwiper', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: 0,
      slidesPerView: 3, // Display 3 images per slide
      spaceBetween: 20, // Space between each image
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000, // Delay between slides (in milliseconds)
        disableOnInteraction: false, // Allow autoplay to continue on user interaction
      },
      breakpoints: {
        // Responsive breakpoints
        250: {
          slidesPerView: 1,
        },
        379: {
          slidesPerView: 1,
        },
        380: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        596: {
          slidesPerView: 3,
        },
        797: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
  }, []);

  return (
    <div>
      <Swiper className="mySwiper">
        {newProducts.map((product, id) => (
          <SwiperSlide key={id}>
            <NavLink to={`/products/${product.id}`} className="feature-link">
              <div className="new-product-item discount-product-item feature-product-item">
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
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default FeaturedProductAll;
