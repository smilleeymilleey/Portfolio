import React from 'react'
import "./Home.css";
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';





function Home() {
  

  // turs the navbar into a hamburger menue at breakpoint 600


    function toggleNav() {
      var nav = document.getElementById("navbar");
      if (nav.className === "navbar") {
          nav.className += "responsive";
        } else {
          nav.className = "navbar";
        }

    };

=======

function Home() {
>>>>>>> parent of 7a64b52 (created a navbar toggle using media querys and refactord classnames using bem convention)
    return (
       
    <div>
        <title>Portfolio Page</title>
    
    
      {/* Navbar */}

        <nav className="navbar__Container">
            <ul className="navbar">
              <li><a href="#about-link">About</a></li>
              <li><a href="#portfolio-link">Portfolio</a></li>
              <li><a href="#blog-link">Blog</a></li>
              <li><a href="#contact-link">Contact</a></li>
            </ul>
        </nav>

      {/*End navbar */}
    
<<<<<<< HEAD
      {/* Start Header Section */} 

     
      <h2>User Profile Card</h2>

          <div className="card">
            <img src="me.png" alt="John"></img>
            <h1>John Doe</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <div>
              <a href="#"><i class="fa fa-dribbble"></i></a> 
              <a href="#"><i class="fa fa-twitter"></i></a>  
              <a href="#"><i class="fa fa-linkedin"></i></a>  
              <a href="#"><i class="fa fa-facebook"></i></a> 
            </div>
            <p><button>Contact</button></p>
=======
      {/*Start Header Section */}

      
        <section id="splash" className="header__Container">
          <div class="row">
              <h1>Caitlyn Miley</h1>
                <p>Web Developer</p>
                  <p>
                    <a href="https://github.com/smilleeymilleey" id="github" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>
                    <a href="https://uk.linkedin.com/in/caitlyn-miley1" id="linkedin" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a>
                    <a href="https://twitter.com/smilleymilleey" id="twitter"target="_blank"><i class="fa fa-twitter-square fa-2x"></i></a>
                  </p>
>>>>>>> parent of 7a64b52 (created a navbar toggle using media querys and refactord classnames using bem convention)
          </div>





 {/*            
//               <a href="#"><GitHubIcon></GitHubIcon></a>
//               <a href="#"><TwitterIcon></TwitterIcon></a>
//               <a href="#"><LinkedInIcon></LinkedInIcon></a>
//              </div>
//               <p><button>Contact</button></p> */}
            
            
        
        {/* End Header Section */}

      {/* Start About Section */}
      
        <section id="about" className="about__Container">
            <h1>About</h1>
              <div id="white-bg" class="about__Paragraph">
                  <p>
                       Bachelors of Science & Engineering. Full Stack Developer Certification from Southern Methodist University. Capabilities include Javascript, React, MySQL, MongoDB, JQuery, Bootstrap, API Integration, JSON, AJAX, HTML, CSS, Github.
                  </p>
              </div>
        </section>
              
        {/* End About Section */}

        {/* Start Portfolio Section */}

        <section id="portfolio" class="portfolio__Container">
          <div className="portfolio__Title">
              <h1 >Portfolio</h1>
          </div>
             {/* Twitter Clone Thumbnail */}

                <div class="twitter_Project">
                    <div class="thumbnail">
                      <a href="https://twitter-clone-1ef21.web.app" target="_blank"></a>
                        <img class="img-responsive" src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png" alt="twitter-clone"></img>
                      <div class="caption">
                        <h3>Twitter Clone</h3>
                        <p>Javascript, React, HTML, CSS, Firebase</p>
                      </div>
                   </div> 
                  </div>
        </section>
            
      {/* // end of portfolio section */}
        


      {/* // /*  Blog Section  */}
       
        <section id="blog" class="blog-container">
          <div class="blog-row">
              <h1 class="blog">Blog</h1>
           
              <div class="container">
                <div class="row">
                  <div class="blog-column">
                    <div class="thumbnail">
                      <a href="https://caitlynmiley-cm.medium.com/freecodecamps-quincy-larson-inspired-me-to-change-my-life-fe6464bb4b03" target="_blank"></a>
                      <img class="img-responsive" src="" alt=""></img>
                    </div>
                    <div class="caption">
                      <h3>Intervieing Quincy Larson</h3>
                      <p>Founder of FreeCodeCamp discusses brand intrgrity, accessibility to tech, programming, and more</p>
                    </div>
                  </div>
                    
                </div>
                  
              </div>
                
              
                      
              
                
          </div>
        </section>
    


        {/* /* <!-- Start Contact Section --> */}



       
        <section id="contact" class="contact__Container">
          <h1>Contact</h1>
          <div class="container">
            <div class="contact__Row">
             
    
                <a href="https://linkedin.com/in/caitlyn-miley1"></a>
               
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              
            
                <a href="https://github.com/smilleeymilleey"></a>
                
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
             
             
               
                <a href="mailto:cmiley@protonmail.com"></a>
                    
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
            
            </div>
            </div>
             
        </section> 
        
      
       
       

              
    
    
</div>



    )
}

export default Home