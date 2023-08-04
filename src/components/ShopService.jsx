import React from 'react';
import {
  FaTruck,
  FaRegCreditCard,
  FaShoppingBag,
  FaHeadphones,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    tag: <FaTruck className="serviceIcon" />,
    title: 'Worldwide Delivery',
  },
  {
    id: 2,
    tag: <FaRegCreditCard className="serviceIcon" />,
    title: 'Safe Payment',
  },
  {
    id: 3,
    tag: <FaShoppingBag className="serviceIcon" />,
    title: 'Shop With Confidence',
  },
  {
    id: 4,
    tag: <FaHeadphones className="serviceIcon" />,
    title: '24/7 Support',
  },
];

const ShopService = () => {
  return (
    <div className="service-wrap">
      <div className="container-fluid">
        <div className="row service-row">
          {services.map((service, id) => (
            <div className="col-lg-3 col-sm-6 col-12 service-column" key={id}>
              <div className="service-item">
                <span className="icon-wrap">{service.tag}</span>
                <h6>{service.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShopService;
