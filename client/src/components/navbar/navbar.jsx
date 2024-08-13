import React from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import './navbar.css'
import { useUser } from '../../context/userContext'
import {logout} from "../../actions/authentication.js"

const Navbar = () => {

  const { user } = useUser();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Job Find</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="#">Find Job</a>
        <a class="nav-link" href="/employerDashboard">Post Job</a>
        {user ? (
          <>
            {user.role === 'employer' && (
              <>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/applications">Applications</a></li>
              </>
            )}
            <li><a href="/profile">Profile</a></li>
          </>
        ) : (
          <li><a class="nav-link" href="/login">Sign Up</a></li>
        )}
        
        <a><button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button></a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar;