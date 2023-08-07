import * as React from 'react'
import Hero from './Hero'
import VirtualGym from './VirtualGym'
import WorkoutTrainers from './WorkoutTrainers'
import About from './About'
import GetStarted from './GetStarted'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Navbar from './Navbar'
import '../../styles/homepage/HomeStyle.css'

const HomePage = () => {
  return (
    <>  
        <div className='navbar'>
          <Navbar />
        </div>
        
        <div className='content'>
          <Hero />
          <VirtualGym />
          <WorkoutTrainers />
          <About />
          <GetStarted />
          <ContactUs />
          <Footer />
        </div>
    </>
  )
}

export default HomePage;
