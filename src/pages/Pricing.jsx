import { Splide } from '@splidejs/splide';
import React, { useEffect } from 'react';
import Faq from '../components/Faq';
import Plans from '../components/Plans';
import Splider from '../components/Splider';
import Footer from '../components/Footer';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  return (
    <div>
      <Plans />
      <Splider />
      <Faq />
      <Footer />
    </div>
  );
};

export default Pricing;
