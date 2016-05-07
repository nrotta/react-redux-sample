import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let Profile = ({ name }) => (
  <div>
    <Link to='/'>Counter</Link> | <Link to='/profile'>Profile</Link>
    <p>Name: {name}</p>
  </div>
)

Profile.propTypes = {
  name: PropTypes.string.isRequired
}

export default Profile
