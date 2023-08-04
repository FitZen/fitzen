import Sidebar from './components/Sidebar';
import './App.css';
// import Navbar from './components/Navbar';
// import Hero from './pages/landingPage/Hero';
// import ContactUs from './pages/landingPage/ContactUs';
// import VirtualGym from './pages/landingPage/VirtualGym';
// import WorkoutTrainers from './pages/landingPage/WorkoutTrainers';
// import About from './pages/landingPage/About';
// import GetStarted from './pages/landingPage/GetStarted';
// import Footer from './pages/landingPage/Footer';
import Dashboard from './pages/member/Dashboard';
import Instructors from './pages/member/Instructors';
import Progress from './pages/member/Progress';
import Shakebar from './pages/member/Shakebar';
import Reports from './pages/member/Reports';
import Schedule from './pages/member/Schedule';
import Notification from './pages/member/Notification';
import Profile from './pages/member/Profile';
import HomePage from './pages/landingPage/HomePage';
import Login from './components/Login';

import SDashboard from './pages/shakebarmanager/Dashboard';
import Orders from './pages/shakebarmanager/Orders';
import Items from './pages/shakebarmanager/Items';
import SReports from './pages/shakebarmanager/Reports';

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/shakebar" element={<Shakebar />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />


        <Route path="/shakebarmanager/dashboard" element={<SDashboard />} />
        <Route path="/shakebarmanager/orders" element={<Orders />} />
        <Route path="/shakebarmanager/items" element={<Items />} />
        <Route path="/shakebarmanager/reports" element={<SReports />} />

      </Routes>
    </>
   
  );
}

export default App;
