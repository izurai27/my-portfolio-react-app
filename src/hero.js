import React from 'react';
import './css/hero.css'
// import izma from './images/izma3.jpg'
import femaleProgrammer from './images/female-programmer.svg'
import logo from './images/iR-logos_transparent.png'

function Hero(){
    

    return(
        <div className="hero">
            {/* <div className='wrapper'>
            <img className='heroimgprofile' src={izma} alt='profilepic'></img>
                <h1 className='title'>izma raifani</h1>
                <p className='subtitle'>a frontend developer<br/> and <br/>product manager</p>
            </div>
             */}
            
            
                 <div className="hero-left">
                 {/* <img className='logo' src={logo} alt="logo" /> */}
                    <div className="name"><img className='logo' src={logo} alt="logo" />Izma Raifani </div>
                    <p className="my-title">a web developer</p>
                      <a href="#project"><button>see my works</button></a>
                    
                 </div>
                 <div className='hero-right'>
                    <img src={femaleProgrammer} alt="female-programmer-ilustration" />   
                    {/* <span className='freepik'>Designed by <a href='https://www.freepik.com/free-vector/css-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development-vector-isolated-concept-metaphor-illustration_12083314.htm#query=web%20developer&position=22&from_view=search'>Freepik</a></span> */}
                 </div>
             

        </div>
        
    )
}


export default Hero