import React, {useState} from 'react'
import {quotes} from './quotes'
import './css/quote.css'

// import triangle from './images/5156621-thin.svg'

const Quote = () => {
  const [random,setRandom] = useState(44)
  setTimeout(() => {
    
    if (random<quotes.length-1) {
      setRandom(random+1)
    } else {
      setRandom(0)
    }

    }, 5000)
    

  return (
    <div>
      <div className='quotewrapper reveal zoom-in'>
          <div className='background'>
            <div>
              <div className='quote'>"{quotes[random].quote}"</div> 
              <div className='author active zoom-in'>{quotes[random].author}</div>

            </div>
          </div>
      </div>
    </div>
    
  )
}

export default Quote