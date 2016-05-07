import React, { Component, PropTypes } from 'react'

let Counter = ({ counter, onIncrement, onDecrement }) => (
  <div>
    <h1>Welcome</h1>
    <p>Counter: {counter}</p>
    <button onClick={() => onIncrement(2)}>++</button>
    <button onClick={() => onIncrement(1)}>+</button>
    <button onClick={() => onDecrement(1)}>-</button>
    <button onClick={() => onDecrement(2)}>--</button>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
