import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import CounterPage from './CounterPage'
import ProfilePage from './ProfilePage'

export default class Root extends Component {
  render() {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path='/' component={CounterPage}/>
            <Route path='/profile' component={ProfilePage}/>
          </Router>
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
