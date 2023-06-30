import React from 'react'
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider'

import './Home.scss';
const Home = () => {
  return (
    <div className='home' data-aos="zoom-in">
      <Slider />
      <Categories />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home