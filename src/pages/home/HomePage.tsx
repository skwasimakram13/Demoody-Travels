import React from 'react';
import Hero from '../../components/sections/Hero';
import Services from '../../components/sections/Services';
import TourPackages from '../../components/sections/TourPackages';
import SpecialOffers from '../../components/sections/SpecialOffers';
import Testimonials from '../../components/sections/Testimonials';
import About from '../../components/sections/About';
import Contact from '../../components/sections/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <TourPackages />
      <SpecialOffers />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
