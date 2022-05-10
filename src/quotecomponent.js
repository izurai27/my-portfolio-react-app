import React, {useState} from 'react'
import {quotes} from './quotes'
import './css/quote.css'

// import triangle from './images/5156621-thin.svg'

const Quote = () => {
  const [random,setRandom] = useState(44)


  //  random = Math.floor(Math.random()*quotes.length)
  setTimeout(() => {
    // setRandom(Math.floor(Math.random()*quotes.length))
    if (random<quotes.length-1) {
      setRandom(random+1)
    } else {
      setRandom(0)
    }}
    , 500000)
    
    console.log(random)

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