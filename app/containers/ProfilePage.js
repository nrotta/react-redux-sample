import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = (state) => {
  return {
    name: 'Nicolas'
  }
}

const ProfilePage = connect(
  mapStateToProps
)(Profile)

export default ProfilePage
