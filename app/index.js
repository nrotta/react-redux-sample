import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './containers/Root'

import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('app')
)
