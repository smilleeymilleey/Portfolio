import React from 'react'
import "./Projects.css";
import twitter from './twitter.jpg';
import amazonclone from './amazonclone.jpg';
import soap from "./soap.PNG";

function Projects() {

  

    return (
       

    
        <div id="projects">

        <div id="projects__Div__Container">
            <h1>
                Projects
            </h1>
        </div>


  
        <div className="card__Row">
            <div className="card__Column">
                <div className="card">

                  
                     <img href="https://e-commerce-34a07.web.app/" src={amazonclone} className="card__Image" alt="amazon-clone-website"></img>
                  
                    <div className="card__Title">
                        <h1 className="text__Title">Amazon Clone</h1>
                    </div>
                </div>
            </div>
            <div className="card__Column">
                <div className="card">
                   
                    <img href="https://twitter-clone-1ef21.web.app" className="card__Image" src={twitter} alt="twitter-clone-website"></img>
                    
                    <div className="card__Title">
                        <h1 className="text__Title">Twitter Clone</h1>
                    </div>
                </div>
            </div>
            <div className="card__Column">
                <div className="card">
                    <img href="https://soap.netlify.app/"className="card__Image" src={soap}alt="soap-e-commerce-website"></img>
                    <div className="card__Title">
                        <h1 className="text__Title">Soap E-Commerce </h1>
                    </div>
                </div>
            </div>
           

           


        </div>
        </div>
  
                    

      
                        

      




    )}

export default Projects
