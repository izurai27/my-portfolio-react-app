import React from 'react';
import './css/header.css'

// function timeOfDay() {
//     let hour = new Date().getHours();
//     if (hour >= 4 && hour <= 11) return 'Pagi';
//     if (hour >= 12 && hour <= 16) return 'Siang';
//     if (hour >= 17 && hour <= 20) return 'Sore';
//     if (hour >= 21 || hour <= 3) return 'Malam';
//   }
  

function Header(){
    return (
        <header>
            {/* <span className='greeting'>{`Selamat ${timeOfDay()}!`}</span> */}
            <span className='greeting'>izma raifani portfolio</span>
            <div className='nav-expand'>
                <a href='#project'>works</a>
                <a href='#profile'>profile</a>
                <a href='#contact'>contact</a>
            </div>

            <div className='hbg-menu'>
                <span className='topbtm'></span>
                <span className='mdl'></span>
                <span className='topbtm'></span>
            </div>
        </header>
    )
}

export default Header