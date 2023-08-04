import React from 'react';
import { FaRegHandshake,FaRegShareSquare,FaAward,FaRegCreditCard,FaRegSun, } from 'react-icons/fa';

const productPolicies = [
  {
    id: 1,
    title: 'Cash on Delivery Available',
    tag: <FaRegHandshake className="policy-icon" />,
  },
  {
    id: 2,
    title: '7 Days Replacement Policy',
    tag: <FaRegShareSquare className="policy-icon" />,
  },
  {
    id: 3,
    title: '100% Original Product',
    tag: <FaRegSun className="policy-icon" />,
  },
  {
    id: 4,
    title: 'Purchase & Earn Points',
    tag: <FaRegCreditCard className="policy-icon" />,
  },
  {
    id: 5,
    title: '100% Money Back Guarantee',
    tag: <FaAward className="policy-icon" />,
  },
];

const ProductPolicy = () => {
  return (
    <div className='product-policy-wrap'>
    <ul className='policy-wrap'>
      {productPolicies.map((policy, id) => (
        <li key={id}>
          {policy.tag} {policy.title}
        </li>
      ))}
    </ul>
    </div>
  );
};
export default ProductPolicy;
