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
import SignUP from './components/SignUP';
import Medical from './components/Medical';
import EditProfile from './pages/member/EditProfile';
import Packages from './pages/member/Packages';
import MealPlan from './pages/member/MealPlan';
import Goals from './pages/member/Goals';
import InstructorProfile from './pages/member/InstructorProfile';
import OwnMembership from './pages/member/OwnMembership';
import AllocatedInstructorProfile from './pages/member/AllocatedTrainerProfile';

import AdminDashboard from './pages/admin/Dashboard';
import AdminProfile from './pages/admin/Profile';
import AdminMembers from './pages/admin/Members';
import AdminInstructors from './pages/admin/Instructors';
import AdminEmployees from './pages/admin/Employees';
import AdminShakebar from './pages/admin/Shakebar';
import AdminAnnouncement from './pages/admin/Announcement';
import Admincomplaint from './pages/admin/Complaint';
import Adminreport from './pages/admin/Report';
import MembershipPlans from './pages/admin/MembershipPlans';
import TrainerPackages from './pages/admin/TrainerPackages';

import ReceiptionistDashboard from './pages/receiptionist/Dashboard';
import ReceiptionistProfile from './pages/receiptionist/Profile';

import SDashboard from './pages/shakebarmanager/Dashboard';
import Orders from './pages/shakebarmanager/Orders';
import Items from './pages/shakebarmanager/Items';
import SReports from './pages/shakebarmanager/Reports';
import SProfile from './pages/shakebarmanager/Profile';
import AddnewItem from './pages/shakebarmanager/AddnewItem';

import { Route, Routes, Navigate } from "react-router-dom";
import TrainerDashboard from "./pages/trainer/Dashboard";
import TrainerProfile from './pages/trainer/Profile';
import TrainerEditProfile from './pages/trainer/EditProfile';
import Students from './pages/trainer/Students';
import TrainerShakebar from './pages/trainer/Shakebar';
import StudentProgress from './pages/trainer/Progress';

import TrainerReports from "./pages/trainer/Report";
import TrainerSchedule from "./pages/trainer/Schedule";
import TrainerMealplan from "./pages/trainer/Mealplan";


import PhysiotherapistDashboard from "./pages/physiotherapist/Dashboard";
import PhysiotherapistProfile from "./pages/physiotherapist/Profile";
import PhysiotherapistEditProfile from "./pages/physiotherapist/EditProfile";
import PhysiotherapistStudents from "./pages/physiotherapist/Students";
import PhysiotherapistShakebar from "./pages/physiotherapist/Shakebar";
import PhysiotherapistSchedule from "./pages/physiotherapist/Schedule";
import PhysiotherapistReports from "./pages/physiotherapist/Reports";
import StudentHistory from "./pages/physiotherapist/StudentHistory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/member/dashboard" element={<Dashboard />} />
        <Route path="/member/instructors" element={<Instructors />} />
        <Route path="/member/progress" element={<Progress />} />
        <Route path="/member/shakebar" element={<Shakebar />} />
        <Route path="/member/reports" element={<Reports />} />
        <Route path="/member/schedule" element={<Schedule />} />
        <Route path="/member/notification" element={<Notification />} />
        <Route path="/member/profile" element={<Profile />} />
        <Route path="/member/editProfile" element={<EditProfile />} />
        <Route path="/member/packages" element={<Packages />} />
        <Route path="/member/mealplan" element={<MealPlan />} />
        <Route path="/member/goals" element={<Goals />} />
        <Route path="/member/instructorprofile" element={<InstructorProfile />} />
        <Route path="/member/ownmembership" element={<OwnMembership />} />
        <Route path="/member/allocatedinstructorprofile" element={<AllocatedInstructorProfile />} />


        <Route path="/shakebarmanager/dashboard" element={<SDashboard />} />
        <Route path="/shakebarmanager/orders" element={<Orders />} />
        <Route path="/shakebarmanager/items" element={<Items />} />
        <Route path="/shakebarmanager/reports" element={<SReports />} />
        <Route path="/shakebarmanager/profile" element={<SProfile />} />
        <Route path="/shakebarmanager/addnewitem" element={<AddnewItem />} />


        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/members" element={<AdminMembers />} />
        <Route path="/admin/instructors" element={<AdminInstructors />} />
        <Route path="/admin/employees" element={<AdminEmployees />} />
        <Route path="/admin/shakebar" element={<AdminShakebar />} />
        <Route path="/admin/announcement" element={<AdminAnnouncement />} />
        <Route path="/admin/complaint" element={<Admincomplaint />} />
        <Route path="/admin/report" element={<Adminreport />} />
        <Route path="/admin/membershipplans" element={<MembershipPlans />} />
        <Route path="/admin/trainerpackages" element={<TrainerPackages />} />


        <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
        <Route path="/trainer/profile" element={<TrainerProfile />} />
        <Route path="/trainer/editProfile" element={<TrainerEditProfile />} />
        <Route path="/trainer/Students" element={<Students />} />
        <Route path="/trainer/shakebar" element={<TrainerShakebar />} />
        <Route path="/trainer/progress" element={<StudentProgress />} />

        <Route path="/trainer/reports" element={<TrainerReports />} />
        <Route path="/trainer/schedule" element={<TrainerSchedule />} />
        <Route path="/trainer/mealplans" element={<TrainerMealplan />} />

        <Route path="/receiptionist/dashboard" element={<ReceiptionistDashboard />} />
        <Route path="/receiptionist/profile" element={<ReceiptionistProfile />} />

        <Route path="/physiotherapist/dashboard" element={<PhysiotherapistDashboard />} />
        <Route path="/physiotherapist/profile" element={<PhysiotherapistProfile />} />
        <Route path="/physiotherapist/editProfile" element={<PhysiotherapistEditProfile />} />
        <Route path="/physiotherapist/Students" element={<PhysiotherapistStudents />} />
        <Route path="/physiotherapist/shakebar" element={<PhysiotherapistShakebar />} />
        <Route path="/physiotherapist/schedule" element={<PhysiotherapistSchedule />} />
        <Route path="/physiotherapist/reports" element={<PhysiotherapistReports />} />
        <Route path="/physiotherapist/StudentHistory" element={<StudentHistory />} />

      </Routes>
    </>
   
  );
}

export default App;
