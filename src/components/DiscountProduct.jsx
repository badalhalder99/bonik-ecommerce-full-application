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
    product.category == "smartphones" ||
    product.category == "televisions" ||
    product.category == "cameras"
);

const DiscountProduct = () => {
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
        250:{
          slidesPerView: 1,
        },
        379:{
          slidesPerView: 1,
        },
        380: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        565: {
          slidesPerView: 3,
        },
        768: {
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
            <div className="new-product-item discount-product-item">
              <img
                src={product.thumbnail}
                alt="women clothes"
                className="new-product-img discount-img discount-img3"
              />
              <h6 className="discount-title">{product.title.slice(0, 15)}</h6>
              <div className="price-buy-wrap discount-price-btn-wrap">
                <p>${product.price}</p>
                <NavLink to={`/products/${product.id}`} >
                  <button className="btn discount-btn">Buy Now</button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default DiscountProduct;
