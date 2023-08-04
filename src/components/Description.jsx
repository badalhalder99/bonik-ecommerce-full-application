import React from 'react';

const Description = ({ description,productId ,rating}) => {
  return <>
  <p className='card-description'> {description}</p>
  <p className='card-sku'><span>SKU:</span> ke-00{productId}</p>
  <p className='card-rating'><span>Rating: </span>{rating}</p>
  </>;
};

export default Description;
