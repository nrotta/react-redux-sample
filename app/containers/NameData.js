import React from 'react'
import { connect } from 'react-redux'
import Name from '../components/Name'

const mapStateToProps = (state) => {
  return {
    name: 'Nicolas'
  }
}

const Home = connect(
  mapStateToProps
)(Name)

export default Home
