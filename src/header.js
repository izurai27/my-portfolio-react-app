import React, { useState } from 'react';
import './css/header.css'

function Logo(){
    const [logo, setLogo] = useState('iz');
    return(
        <span className='logo' onMouseOver={()=>setLogo('izma raifani')} onMouseLeave={()=>setLogo('iz')}>{logo}</span>
    )
}

function Header(){
    return (
        <header>
            {/* <span>izma raifani</span> */}
            <Logo/>
            <div className='nav'>
                <a href='#project'>projects</a>
                <a href='#profile'>profile</a>
                <a href='#contact'>contact</a>
            </div>
        </header>
    )
}

export default Header