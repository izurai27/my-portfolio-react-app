import React, {useState} from 'react'
import {quotes} from './quotes'
import './css/quote.css'

// import triangle from './images/5156621-thin.svg'

const Quote = () => {
  const [random,setRandom] = useState(0)


  //  random = Math.floor(Math.random()*quotes.length)
  setTimeout(() => 
    setRandom(Math.floor(Math.random()*quotes.length))
  , 10000)
 

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