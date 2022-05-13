import React from 'react';
import './css/hero.css'
// import izma from './images/izma3.jpg'
import femaleProgrammer from './images/female-programmer.svg'
import logo from './images/iR-logos_transparent.png'

function Hero(){
    function reveal() {
        var reveals = document.querySelectorAll(".reveal-hero");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();

    return(
        <div className="hero">
            <div className="hero-left reveal-hero">
                <div className="name"><img className='logo' src={logo} alt="logo" />Izma Raifani </div>
                <p className="my-title">a web developer</p>
                <a href="#project"><button>see my works</button></a>
            </div>
            <div className='hero-right reveal-hero'>
                <img src={femaleProgrammer} alt="female-programmer-ilustration" />   
            </div>
        </div>
        
    )
}


export default Hero