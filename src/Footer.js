import React from 'react'
import './Footer.css';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
    <div id="contact">

        <div id="contact__Div__Container">
            <h1> Contact </h1>
        </div>
        <div id="footer__Text">
            <a href="mailto:cmiley@protonmail.com">
              <EmailIcon></EmailIcon> caitlynmiley.cm@gmail.com
            </a>
            <a href="https://github.com/smilleeymilleey">
              <GitHubIcon></GitHubIcon> smilleeymilleey
            </a>
            <a href="https://www.linkedin.com/in/caitlynmiley/">
              <LinkedInIcon></LinkedInIcon> Caitlyn Miley
            </a>
            <a href="https://twitter.com/smilleymilleey">
              <TwitterIcon></TwitterIcon> @smilleymilleey
            </a>
        
        </div>
       
    </div>
      
    )
}

export default Footer
