import React from 'react';
import './css/header.css';
import Menu from './menu';

// function timeOfDay() {
//     let hour = new Date().getHours();
//     if (hour >= 4 && hour <= 11) return 'Pagi';
//     if (hour >= 12 && hour <= 16) return 'Siang';
//     if (hour >= 17 && hour <= 20) return 'Sore';
//     if (hour >= 21 || hour <= 3) return 'Malam';
//   }
  

function Header(){

    let displaymenu=false;

    const handleMenu = () => {
        displaymenu = !displaymenu
        console.log(displaymenu)
    }

    return (
        <header>
           
            <div className='hbg-menu' onClick={handleMenu}>
                <span className='topbtm'></span>
                <span className='mdl'></span>
                <span className='topbtm'></span>
            </div>
            <Menu />

        </header>
    )
}

export default Header