import React from 'react';
import './css/profile.css';
import izma from './images/izma3.jpg'


function Profile(){
    return (
      <div id='profile'>
        {/* <img className='imgprofile' src={izma} alt='profilepic'></img> */}
        <h2>PROFILE</h2>
        <p>Seorang Junior frontend developer, dengan skill :</p>
        <p>html, css, javascript, react js, nodejs, mongodb </p>
      </div>
    )
  }

export default Profile