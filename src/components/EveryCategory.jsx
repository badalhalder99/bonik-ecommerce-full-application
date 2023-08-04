import React from 'react';
import { NavLink } from 'react-router-dom';

const categoryAsset = [
  {
    id: 1,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F7.DenimClassicBlueJeans.png&w=64&q=75',
    title: 'Smartphone',
  },
  {
    id: 2,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=64&q=75',
    title: 'Tablet',
  },
  {
    id: 3,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FJewellery%2F8.IndianPearlThreadEarrings.png&w=64&q=75',
    title: 'Laptop',
  },
  {
    id: 4,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FJewellery%2F21.FeathersandBeadsBohemianNecklace.png&w=64&q=75',
    title: 'Gaming',
  },
  {
    id: 5,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FShoes%2F11.Flowwhite.png&w=64&q=75',
    title: 'Camera',
  },
  {
    id: 6,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F1.SaktiSambarPowder.png&w=64&q=75',
    title: 'Headphone',
  },
  {
    id: 7,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F14.ACIProducts.png&w=64&q=75',
    title: 'Television',
  },
  {
    id: 8,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F27.SardinesPack.png&w=64&q=75',
    title: "Men's ",
  },
  {
    id: 9,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHealth%26Beauty%2F12.BeautySocietyantiacnemask.png&w=64&q=75',
    title: "Women's",
  },
  {
    id: 10,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHealth%26Beauty%2F25.MarioBadescuSkinCareShampoo.png&w=64&q=75',
    title: 'Jewelery',
  },
  {
    id: 11,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FHome%26Garden%2F13.GardenRosesinBlueVase.png&w=64&q=75',
    title: 'Electronics',
  },
  {
    id: 12,
    path: '/products',
    src: 'https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F12.Xiaomimiband2.png&w=64&q=75',
    title: 'Smartphone',
  },
];

const EveryCategory = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {categoryAsset.map((category, id) => (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={id}>
            <div className="category-product-wrapper">
              <NavLink to={category.path} className="category-icon-every">
                <img src={category.src} alt="category image" />
                <span>{category.title}</span>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EveryCategory;
