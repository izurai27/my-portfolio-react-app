import React from 'react';
// import { useEffect } from 'react/cjs/react.production.min';
import './css/hero.css'
// import izma from './images/izma3.jpg'
import femaleProgrammer from './images/female-programmer.svg'
import logo from './images/iR-logos_transparent.png'

function Hero(){

    
    return(
        <div className="hero">
            <div className="hero-left active fade-right">
                <div className="name"><img className='logo' src={logo} alt="logo" />Izma Raifani </div>
                <p className="my-title">a web developer</p>
                <a href="#project"><button>see my works</button></a>
            </div>
            <div className='hero-right active fade-left'>
                <img src={femaleProgrammer} alt="female-programmer-ilustration" />   
            </div>
        </div>
        
    )
}


export default Hero