import React from 'react';
import './css/hero.css'
import izma from './images/izma3.jpg'

function Hero(){
    

    return(
        <div className="hero">
            <div className='wrapper'>
            <img className='heroimgprofile' src={izma} alt='profilepic'></img>
                <h1 className='title'>izma raifani</h1>
                <p className='subtitle'>a frontend developer<br/> and <br/>product manager</p>
            </div>
            
            
        </div>
        
    )
}


export default Hero