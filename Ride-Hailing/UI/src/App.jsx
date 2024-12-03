import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/mainlayout'
import Home from './pages/home';
import Services from './pages/service';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Signup from './pages/signup';
import RidersList from './pages/ridersList';
import AdminLayout from './layout/adminLayout';
import TripUpdations from './pages/tripUpdations';
import DisplayPayment from './pages/displayPayment';
import RiderUpdation from './pages/riderUpdation';
import AddPayment from './pages/addPayment';
import Dashboard from './pages/dashboard';
import RiderDetails from './pages/rider';
import Trips from './pages/trips';
import User from './pages/User';
import Payment from './pages/Payment';
import TripVerification from './pages/tripVerification';
import AddFareData from './pages/fare';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ridersList' element={<RidersList />} />
          <Route path='/tripUpdations' element={<TripUpdations />} />
          <Route path='/displayPayment' element={<DisplayPayment />} />
          <Route path='/riderUpdation' element={<RiderUpdation />} />
          <Route path='/addPayment' element={<AddPayment />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path='/adminDashBoard' element={<Dashboard />} />
          <Route path='/riders' element={<RiderDetails />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/users' element={<User />} />
          <Route path='/payments' element={<Payment />} />
          <Route path='/tripVerification' element={<TripVerification />} />
          <Route path='/addFare' element={<AddFareData />} />
        </Route>

      </Routes>
    </Router >
  )

}

export default App