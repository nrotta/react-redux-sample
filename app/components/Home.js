import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

let Home = ({ dispatch, counter }) => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment(2))}>++</button>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(decrement(2))}>--</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

Home = connect(mapStateToProps)(Home)

export default Home
