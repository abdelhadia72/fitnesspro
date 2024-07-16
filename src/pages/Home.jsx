import React, { useEffect } from 'react';
import Booking from '../components/Booking';
import Experience from '../components/Experience';
import FitnessPro from '../components/FitnessPro';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Howitworks from '../components/Howitworks';
import Intro from '../components/Intro';
import Space from '../components/Space';
import Trainers from '../components/Trainers';
import Trial from '../components/Trial';
import Trusted from '../components/Trusted';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  return (
    <div>
      <Hero />
      <Trusted />
      <Howitworks />
      <Intro />
      <Booking />
      <Experience />
      <FitnessPro />
      <Trainers />
      <Space />
      <Trial />
      <Footer />
    </div>
  );
};

export default Home;
