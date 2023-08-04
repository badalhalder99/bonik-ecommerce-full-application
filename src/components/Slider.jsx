import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLaptop,
  FaAirbnb,
  FaMobile,
  FaTabletAlt,
  FaCameraRetro,
  FaHeadphones,
  FaMedrt,
  FaDiagnoses,
  FaPushed,
  FaSketch,
} from 'react-icons/fa';
import { products } from '../data/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const sliderProducts = products.filter((product) => product.category === 'watch');

const categories = [
  {
    id: 1,
    path: '/products',
    tag: <FaMobile className="category-icon" />,
    title: 'Smartphone',
  },
  {
    id: 2,
    path: '/products',
    tag: <FaTabletAlt className="category-icon" />,
    title: 'Tablet',
  },
  {
    id: 3,
    path: '/products',
    tag: <FaLaptop className="category-icon" />,
    title: 'Laptop',
  },
  {
    id: 4,
    path: '/products',
    tag: <FaAirbnb className="category-icon" />,
    title: 'Gaming',
  },
  {
    id: 5,
    path: '/products',
    tag: <FaCameraRetro className="category-icon" />,
    title: 'Camera',
  },
  {
    id: 6,
    path: '/products',
    tag: <FaHeadphones className="category-icon" />,
    title: 'Headphone',
  },
  {
    id: 7,
    path: '/products',
    tag: <FaMedrt className="category-icon" />,
    title: 'Television',
  },
  {
    id: 8,
    path: '/products',
    tag: <FaDiagnoses className="category-icon" />,
    title: "Men's clothing",
  },
  {
    id: 9,
    path: '/products',
    tag: <FaHeadphones className="category-icon" />,
    title: "Women's clothing",
  },
  {
    id: 10,
    path: '/products',
    tag: <FaPushed className="category-icon" />,
    title: 'Jewelry',
  },
  {
    id: 11,
    path: '/products',
    tag: <FaSketch className="category-icon" />,
    title: 'Electronics',
  },
];

const Slider = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 category-main-wrap">
          <div className="category-wrap">
            {categories.map((category) => (
              <NavLink to={category.path} className="category-link d-block" key={category.id}>
                {category.tag} {category.title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-lg-9">
          <div className="slider-wrap">
            <Carousel autoPlay interval={2500} infiniteLoop stopOnHover={false}>
              {sliderProducts.map((p, id) => (
                <div className="slider-card" key={id}>
                  <div className="slider-inform">
                    <h1 className="slider-title">{p.title}</h1>
                    <p className="slider-description">{p.description}</p>
                    <NavLink to={`/products/${p.id}`} className="slider-link">Shop Now</NavLink>
                  </div>
                  <div className="slider-img">
                    <img src={p.thumbnail} className="sliderImg" alt={p.title} />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
