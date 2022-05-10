import React from 'react'
import {quotes} from './quotes'
import './css/quote.css'
// import triangle from './images/5156621-thin.svg'

const Quote = () => {
  const random = Math.floor(Math.random()*quotes.length)
  return (
    <div>
      <div className='quotewrapper'>
          <div className='background'>
            <div className='quote'>"{quotes[random].quote}"</div> <br/>
            <div className='author'>{quotes[random].author}</div>
          </div>
      </div>
    </div>
    
  )
}

export default Quote