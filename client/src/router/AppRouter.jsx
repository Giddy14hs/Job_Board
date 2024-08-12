import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from '../pages/home/home.jsx';
import Navbar from '../components/navbar/navbar.jsx'
import JobListing from '../pages/jobListing/jobListing.jsx';
import JobDetail from '../pages/jobDetail/jobDetail.jsx';
import EmployerBoard from '../pages/employerBoard/employerBoard.jsx';
import CandidateBoard from '../pages/candidateBoard/candidateBoard.jsx';
import Footer from "../components/Footer/Footer.jsx"
import Login from "../login/login.jsx"
import {Layout} from 'antd'

const LayoutWithConditionalNavFooter = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <Layout>
      {!hideNavAndFooter && <Navbar />}
      {children}
      {!hideNavAndFooter && <Footer />}
    </Layout>
  );
};

const   AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <LayoutWithConditionalNavFooter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path='/jobListing' element={<JobListing />}/>
        <Route path='/jobDetail' element={<JobDetail />}/>
        <Route path='/employerBoard' element={<EmployerBoard />}/>
        <Route path='/candidateBoard' element={<CandidateBoard />}/>
      </Routes>
      </LayoutWithConditionalNavFooter>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;