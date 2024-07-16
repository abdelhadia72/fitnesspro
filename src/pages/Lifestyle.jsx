import React, { useEffect } from 'react';
import Community from '../components/Community';
import Footer from '../components/Footer';
import LifestyleSlider from '../components/LifestyleSlider';
import PostList from '../components/PostList';

const Lifestyle = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  return (
    <div>
      <LifestyleSlider />
      <PostList />
      <Community />
      <Footer />
    </div>
  );
};

export default Lifestyle;
