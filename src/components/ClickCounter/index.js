// Write your code here
import React, {useState} from 'react'
import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="counter-container">
      <h1 className="counter-heading">
        The button has been clicked {count} times
      </h1>
      <p className="counter-description">
        Click the button to increase the count
      </p>
      <button className="click-button" onClick={incrementCount}>
        Click Me!
      </button>
    </div>
  )
}

export default ClickCounter
