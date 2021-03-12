import React from 'react'
import "./Home.css";

function Home() {
    return (
       
       <div>

        <title>Portfolio Page</title>

       
        <link rel="stylesheet" href="css/style.css"/>
    
        
    
    
    
      {/* Navbar */}

        <nav class="navbar">
          <div class="container">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#about-link">About</a></li>
                <li><a href="#portfolio-link">Portfolio</a></li>
                <li><a href="#blog-link">Blog</a></li>
                <li><a href="#contact-link">Contact</a></li>
              </ul>
          </div>
        </nav>

      {/* end navbar */}
    
        {/* <!-- Start Splash Section  --> */}

        <a class="anchor" id="home"></a>
        <div id="splash" class="container-fluid">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1>Caitlyn Miley</h1>
              <hr />
              <p>
                Web Developer 
              </p>
              <p>
                <a href="https://github.com/smilleeymilleey" id="github" target="_blank"><i class="fa fa-github-square fa-2x"></i></a>
                <a href="https://uk.linkedin.com/in/caitlyn-miley1" id="linkedin" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a>
                <a href="https://twitter.com/smilleymilleey" id="twitter"target="_blank"><i class="fa fa-twitter-square fa-2x"></i></a>
              </p>
            </div>
          </div>
        </div>

        {/* <!-- End Splash Section  --> */}
        <a class="anchor" id="about-link"></a>
        <div id="about" class="container-fluid text-center">
              <h1 class="portfolio">About</h1>
              <hr />
              <div class="container">
                <div class="row row-eq-height">
                  <div class="col-lg-1"></div> 
                  <div class="col-lg-3">
                
                  </div>
                  <div id="white-bg" class="about">
                    <p class="aboutDescription">
                       Bachelors of Science & Engineering. Full Stack Developer Certification from Southern Methodist University. Capabilities include Javascript, React, MySQL, MongoDB, JQuery, Bootstrap, API Integration, JSON, AJAX, HTML, CSS, Github.
                      
                      
                    </p>
                  </div>
                </div>
              </div>
        </div>


        {/* <!-- Start portfolio Section  --> */}


        <div id="portfolio" class="container-fluid2">
          <div class="row">
              <h1 class="portfolio">Portfolio</h1>
             
             {/* Twitter Clone Thumbnail */}
              <div class="container">
                <div class="row">
                    <div class="thumbnail">
                      <a href="https://twitter-clone-1ef21.web.app" target="_blank"></a>
                        <img class="img-responsive" src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png" alt="twitter-clone"></img>
                      <div class="caption">
                        <h3>Twitter Clone</h3>
                        <p>Javascript, React, HTML, CSS, Firebase</p>
                      </div>
                   </div> 
                  </div>
                </div>
              </div>
            </div>
         
      


        {/* <!-- End portfolio Section  --> */}
        


        {/* <!-- Blog Section --> */}
       
        <div id="blog" class="blog-container">
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
        </div>
    


        {/* <!-- Start Contact Section --> */}



       
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