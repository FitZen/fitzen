import Sidebar from './components/Sidebar';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/landingPage/Hero';
import ContactUs from './pages/landingPage/ContactUs';
import VirtualGym from './pages/landingPage/VirtualGym';
import WorkoutTrainers from './pages/landingPage/WorkoutTrainers';
import About from './pages/landingPage/About';
import GetStarted from './pages/landingPage/GetStarted';
import Footer from './pages/landingPage/Footer';

function App() {
  return (
    <div className="App">
      {/* <Hero/>
      <VirtualGym/>
      <WorkoutTrainers/>
      <About/>
      <GetStarted/>
      <ContactUs />
      <Footer/> */}
      <Sidebar/>
    </div>
   
  );
}

export default App;
