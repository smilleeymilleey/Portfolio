import React from 'react';
import "./Navbar.css";



function Navbar() {
    return (
        <nav class="navbarA navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <a class="nav-link" href="#projects">Caitlyn Miley</a>
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#about">About</a>
              <a class="nav-link" href="#projects">Projects</a>
              <a class="nav-link" href="#contact">Contact</a>
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"></a>
            </div>
          </div>
        </div>
      </nav>


        

    )
}

export default Navbar
