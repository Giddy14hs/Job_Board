import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import Home from '../pages/home/home.jsx';
import Navbar from '../components/navbar/navbar.jsx'
import EmployerBoard from '../pages/employerBoard/employerBoard.jsx';
import CandidateBoard from '../pages/candidateBoard/candidateBoard.jsx';
import ApplictionTracking from "../pages/application/application.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Login from "../login/login.jsx"
import {Layout} from 'antd'
import { UserProvider } from '../context/userContext.jsx';

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
      <UserProvider>
      <LayoutWithConditionalNavFooter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path='/employerBoard' element={<EmployerBoard />}/>
        <Route path='/candidateBoard' element={<CandidateBoard />}/>
        <Route path='/applications' element={<ApplictionTracking />}/>
      </Routes>
      </LayoutWithConditionalNavFooter>
      </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;