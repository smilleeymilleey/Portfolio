import React from 'react'
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';





function Home() {

  function toggleNav() {

    // turns navbar into a hamburger menu at breakpoint 600

    var nav = document.getElementById("navbar");
    if (nav.className === "navbar") {
        nav.className += "responsive";
      } else {
        nav.className = "navbar";
      }
    }
  
return (
 
   <div className="portfolio__Container">


         {/* Navbar Start */}
        <nav className="navbar__Container">
            <ul className="navbar">
              
           
              <li><a href="#contact-link">Contact</a></li>
              <li><a href="#About-link">About</a></li>
              <li><a href="#Home-link">Home</a></li>
             
              <div className="icon" onClick={toggleNav}> 
                <FontAwesomeIcon className="hamburger__Icon" icon={faBars} />
              </div>
            </ul>
        </nav>
 

      {/*End navbar */}

    
      {/* /* Start Header Section */ }


      <div className="header__Container">
        <img className="me" src="me.png"></img>
          <h1>Caitlyn Miley</h1>
          <h2>Web Developer</h2>
      </div>


 
            
        
        {/* End Header Section */}

     
              
                      
              
                
       
   
    


        {/* /* <!-- Start Contact Section --> */}



       
        
         </div>
             
        



    )
}

export default Home;