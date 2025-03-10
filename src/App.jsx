import { useState } from 'react'
import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import Testimonials from './components/testimonials/Testimonials';
import './App.css'

function App() {
  return (
    <>
       <Header />
       <Topbar />
       <Intro />
       <Experience />
       <Portfolio />
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
