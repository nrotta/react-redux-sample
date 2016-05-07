import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let Name = ({ name }) => (
  <div>
    <Link to='/'>Counter</Link> | <Link to='/name'>Name</Link>
    <h1>Welcome {name}</h1>
  </div>
)

Name.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name
