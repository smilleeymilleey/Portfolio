import React from 'react';
import "./Navbar.css";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WebIcon from '@material-ui/icons/Web';
import MailIcon from '@material-ui/icons/Mail';

function Navbar() {
    return (
       
      <div id="navbar__Container">

          <div class="sidebar">
            <div id="Caitlyn">
              <h1>Caitlyn Miley</h1>
              <h2>Web Developer</h2>
            </div>
          <a class="active" href="#home"><HomeIcon id="home__Icon"></HomeIcon> Home</a>
          <a href="#about"><PersonIcon id="person__Icon"></PersonIcon> About</a>
          <a href="#projects"><WebIcon id="web__Icon"></WebIcon> Projects</a>
          <a href="#contact"><MailIcon id="mail__Icon"></MailIcon> Contact</a>
        </div>
        
        
  </div>





    )
}

export default Navbar
