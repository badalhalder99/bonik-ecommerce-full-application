import React from 'react';

const Img = ({src, classname}) => {
  return <img src={src} alt='baner image' className={`img-fluid banner-img ${classname}`} />;
};
export default Img;