

import { Route, Routes } from 'react-router-dom'
import './App.css'
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

// Components
import Navbar from './Componets/navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import AboutMe from './Componets/About/AboutMe'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import Experience from './Componets/Experience/Experience'
import Skills from './Componets/Skills/Skills'
import SoftSkills from './Componets/SoftSkills/SoftSkills'

function App() {
      useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize("G-TXG5NTZZ39");
    ReactGA.send("pageview");
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <SoftSkills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
