export const increment = (value) => {
  return {
    type: 'INCREMENT_COUNTER',
    value
  }
}

export const decrement = (value) => {
  return {
    type: 'DECREMENT_COUNTER',
    value
  }
}
