import React from 'react'
import PropTypes from 'prop-types'
import WithContext from './context/WithContext'

/**
 * React component which renders Logout button.
 */
export class Logout extends React.Component {
  render() {
    return (
      <button
        id='aas-logout'
        onClick={
          // Call to this.props.logout method is responsible for logging out.
          this.props.logout
        }>
        Logout
      </button>
    )
  }
}

Logout.propTypes = {
  // WithContext utility provides logout method as a prop.
  logout: PropTypes.func,
}

export default WithContext(Logout)
