import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/Nav/Nav';
import Experience from './components/experience/Experience';
import Service from './components/service/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
