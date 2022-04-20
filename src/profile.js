import React from 'react';
import './css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faReact} from '@fortawesome/free-brands-svg-icons'


// import izma from './images/izma3.jpg'


function Profile(){
    return (
      <div id='profile'>
        
        <h2>PROFILE</h2>
        <p>frontend developer, dengan skill :</p>
        <div className='iconwrapper'>
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faReact} />
        </div>
    

      </div>
    )
  }

export default Profile