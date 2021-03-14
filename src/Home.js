import React from 'react'
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';





function Home() {


    //X to close navbar

 
  
return (
 
   <div className="portfolio__Container">


         {/* Navbar Start */}

         <div className="sidenav">
           <div id="caitlyn__Miley">
             <h1 id="title">Caitlyn Miley</h1>
             <p>Web Developer</p>
           </div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
          <a href="#resume">Resume</a>
          
        </div>

      {/*End navbar */}

    
      {/* /* Start Home Section */ }


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