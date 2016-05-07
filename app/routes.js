import React from 'react'
import { Route } from 'react-router'
import CounterPage from './containers/CounterPage'
import ProfilePage from './containers/ProfilePage'

export default (
  <Route path='/' component={CounterPage}>
    <Route path='/profile' component={ProfilePage}/>
  </Route>
)
