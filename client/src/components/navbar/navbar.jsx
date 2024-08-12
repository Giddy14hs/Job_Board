import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Job Find</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Find Job</a>
        <a class="nav-link" href="#">Post Job</a>
        <a class="nav-link" href="/login">Sign Up</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default navbar