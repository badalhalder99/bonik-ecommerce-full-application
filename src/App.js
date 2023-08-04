import React from 'react';
import NavBar from './components/NavBar';
import TopNavBar from './components/TopNavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Review from './components/Review';
import Description from './components/Description';
import Category from './components/Category';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TopNavBar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} >
            <Route index element={<Description />} />
            <Route path='description' element={<Description />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </Provider>
  );
};
export default App;