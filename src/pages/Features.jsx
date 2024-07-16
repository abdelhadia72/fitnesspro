import React, { useEffect } from 'react';
import Booking from '../components/Booking2';
import Experience from '../components/Experience';
import FitnessPro from '../components/FitnessPro2';
import Hero from '../components/Hero2';
import Intro from '../components/Intro';
import LifeStyle from '../components/LifeStyle';
import Slider from '../components/Slider';
import Space from '../components/Space';
import Trusted from '../components/Trusted';
import Trial from '../components/Trial';
import Footer from '../components/Footer';

const Features = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <div>
      <Hero />
      <Intro />
      <Experience />
      <Booking />
      <FitnessPro />
      <Slider />
      <Trusted />
      <LifeStyle />
      <Space />
      <Trial />
      <Footer />
    </div>
  );
};

export default Features;
