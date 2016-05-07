import React from 'react'
import Counter from '../containers/CounterData'
import Name from '../containers/NameData'

import { Router, Route, browserHistory } from 'react-router'

let App = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Counter}/>
    <Route path='/name' component={Name}/>
  </Router>
)

export default App
