import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (val) => {
      dispatch(increment(val))
    },
    onDecrement: (val) => {
      dispatch(decrement(val))
    },
  }
}

const CounterData = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterData
