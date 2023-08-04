import React from 'react';
import { Link, useParams, useMatch } from 'react-router-dom';
import Description from './Description';
import Review from './Review';

function Details({ description, productId, rating }) {
  const { id } = useParams();
  const descriptionMatch = useMatch(`/products/${id}`);
  const descriptionMatch2 = useMatch(`/products/${id}/description`);
  const reviewMatch = useMatch(`/products/${id}/review`);

  return (
    <div className="card">
      <div className="card-header">
        <Link
          to={`/products/${id}/description`}
          className={
            descriptionMatch || descriptionMatch2 ? 'active-link' : 'activeTab'
          }
        >
          Description
        </Link>
        <Link
          to={`/products/${id}/review`}
          className={reviewMatch ? 'active-link' : 'activeTab'}
        >
          Review
        </Link>
      </div>
      <div className="card-body">
        {descriptionMatch && (
          <Description description={description} productId={productId} rating={rating}/>
        )}
        {descriptionMatch2 && (
          <Description description={description} productId={productId} rating={rating} />
        )}
        {reviewMatch && <Review />}
      </div>
    </div>
  );
}

export default Details;
