import expect from 'expect'
import counter from '../reducers'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT_COUNTER', value: 1 })).toBe(2)
    })

    it('should handle DECREMENT action', () => {
      expect(counter(1, { type: 'DECREMENT_COUNTER', value: 1 })).toBe(0)
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' })).toBe(1)
    })
  })
})
