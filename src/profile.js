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
        <div className="desc">
        <p>Saya seorang ibu rumah tangga yang memutuskan untuk mendalami dunia web developer. Perjalanan saya dimulai sejak September 2021. Beruntung saat ini media pembelajaran dapat dengan mudah diakses di internet, banyak terima kasih kepada freecodecamp.org, Youtube WPU dan sumber lainnya, saya dapat mempelajari ilmu web programming hingga saya dapat berada di titik ini. 
        </p><br/>
        <p> Menikmati proses pembuatan project web, saya memutuskan untuk dapat menerapkan dan mengembangkan ilmu yang sudah saya pelajari di dunia kerja. 
</p>

        </div>
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