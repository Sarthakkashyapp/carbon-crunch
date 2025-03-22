import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;

