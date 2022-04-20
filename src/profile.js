import React from 'react';

import './css/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faReact, faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



// import izma from './images/izma3.jpg'


function Profile(){
    return (
      <div id='profile'>
        
        <h2>PROFILE</h2>
        <dir className='grouping'>
          <h3>Skill :</h3>
          <div className='iconwrapper'>
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
          </div>
        </dir>

        <div className="grouping">
          <h3>Contact :</h3>
          <div className='iconwrapper'>
            <a target="_blank" rel="noreferrer" href ='https://wa.me/628950588749'><FontAwesomeIcon icon={faWhatsapp} /></a>
            {/* <FontAwesomeIcon icon={faEnvelope}  /> */}
            <a target="_blank" rel="noreferrer" href ='https://www.linkedin.com/in/izmaraifani/'><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
        </div>
        

      </div>
    )
  }

export default Profile