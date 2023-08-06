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
import EditProfile from './pages/member/EditProfile';

import { Route, Routes, Navigate } from "react-router-dom";
import TrainerDashboard from "./pages/trainer/Dashboard";
import TrainerProfile from './pages/trainer/Profile';
import TrainerEditProfile from './pages/trainer/EditProfile';
import Students from './pages/trainer/Students';
import TrainerShakebar from './pages/trainer/Shakebar';
import StudentProgress from './pages/trainer/Progress';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member/dashboard" element={<Dashboard />} />
        <Route path="/member/homePage" element={<HomePage />} />
        <Route path="/member/instructors" element={<Instructors />} />
        <Route path="/member/progress" element={<Progress />} />
        <Route path="/member/shakebar" element={<Shakebar />} />
        <Route path="/member/reports" element={<Reports />} />
        <Route path="/member/schedule" element={<Schedule />} />
        <Route path="/member/notification" element={<Notification />} />
        <Route path="/member/profile" element={<Profile />} />
        <Route path="/member/editProfile" element={<EditProfile />} />

        <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
        <Route path="/trainer/profile" element={<TrainerProfile />} />
        <Route path="/trainer/editProfile" element={<TrainerEditProfile />} />
        <Route path="/trainer/Students" element={<Students />} />
        <Route path="/trainer/shakebar" element={<TrainerShakebar />} />
        <Route path="/trainer/progress" element={<StudentProgress />} />
      </Routes>
    </>
   
  );
}

export default App;
