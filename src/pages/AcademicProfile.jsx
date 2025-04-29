import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HomeSection from '../components/sections/HomeSection';
import NewsSection from '../components/sections/NewsSection';
import PublicationsSection from '../components/sections/PublicationsSection';
import AwardsSection from '../components/sections/AwardsSection';

const AcademicProfile = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <HomeSection />
      <NewsSection />
      <PublicationsSection />
      <AwardsSection />
      <Footer />
    </div>
  );
};

export default AcademicProfile;
