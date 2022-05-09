import React from 'react'
import {quotes} from './quotes'
import './css/quote.css'

const Quote = () => {
  const random = Math.floor(Math.random()*quotes.length)
  return (
    <div>
      <div className='quotewrapper'>
          <div className='background'>
            <div className='quote'>{quotes[random].quote}</div> <br/>
            <div className='author'>{quotes[random].author}</div>
          </div>
            {/* <span className='freepik'>Designed by <a href="http://www.freepik.com/">Freepik</a></span> */}
      </div>
    </div>
    
  )
}

export default Quote