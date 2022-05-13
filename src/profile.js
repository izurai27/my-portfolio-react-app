import React from 'react';

import './css/profile.css';
import html from './images/html5.png'
import css from './images/css.png'
import js from './images/javascript.png'
import react from './images/react.png'
import github from './images/GitHub.png'
import git from './images/git.png'
import typescript from './images/typescript.png'
import whatsapp from './images/whatsapp.png'
import linkedin from './images/linkedin.png'
import sass from './images/sass.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// import izma from './images/izma3.jpg'


function Profile(){
    return (
      <div id='profile'>
        
        <h2>PROFILE /</h2>
        <div className="desc">
        <p>a self taught web developer who loves to learn and create apps that helps people.
        </p>

        

        </div>
        <dir className='grouping'>
          <div className='h3wrapper'><h3>SKILLS</h3></div>
          <div className='iconwrapper'>
            <img src={html} alt="html-logo" />
            <img src={css} alt="css-logo" />
            <img src={js} alt="js-logo" />
            <img src={react} alt="react-logo" />
            <img src={git} alt="git-logo" />
            <img src={typescript} alt="typescript-logo" />
            <img src={sass} alt="sass-logo" />
          </div>
        </dir>

        <div className="grouping">
          <div className='h3wrapper'><h3>CONTACT ME</h3></div>
          <div className='iconwrapper'>
            <a target="_blank" rel="noreferrer" href ='https://wa.me/628950588749'><img src={whatsapp} alt="wa-logo" /></a>
            
            <a target="_blank" rel="noreferrer" href ='https://www.linkedin.com/in/izmaraifani/'><img src={linkedin} alt="linkedin-logo" /></a>
            <a target="_blank" rel="noreferrer" href ='https://www.linkedin.com/in/izmaraifani/'><img src={github} alt="linkedin-logo" /></a>
          </div>
        </div>
        

      </div>
    )
  }

export default Profile