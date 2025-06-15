import { useState } from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Product from "./components/product";
import AboutUs from './components/aboutus';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
