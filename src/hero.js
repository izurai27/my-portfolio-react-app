import React from 'react';
import './css/hero.css'
// import izma from './images/izma3.jpg'
import femaleProgrammer from './images/female-programmer.svg'

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
                    <div className="name">Izma Raifani</div>
                    <div className="my-title">A Web Developer</div>
                    <button>my works</button>
                 </div>
                 <div className='hero-right'>
                    <img src={femaleProgrammer} alt="female-programmer-ilustration" />   
                    {/* <span className='freepik'>Designed by <a href='https://www.freepik.com/free-vector/css-html-programming-languages-computer-programming-coding-it-female-programmer-cartoon-character-software-website-development-vector-isolated-concept-metaphor-illustration_12083314.htm#query=web%20developer&position=22&from_view=search'>Freepik</a></span> */}
                 </div>
             

        </div>
        
    )
}


export default Hero