import React from 'react'
import {quotes} from './quotes'
import './css/quote.css'

const Quote = () => {
  const random = Math.floor(Math.random()*quotes.length)
  return (
    <div className='quotewrapper'>
      {/* {quotes.map(quote =>  */}
          <div className='quote'>{quotes[random].quote}</div> <br/>
          <div className='author'>{quotes[random].author}</div>
      {/* )} */}
    </div>
  )
}

export default Quote