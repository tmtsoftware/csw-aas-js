import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

/**
 * React component which renders Logout button.
 */
export const Logout = props => {
  const { logout } = useContext(AuthContext)
  return (
    <button
      id='aas-logout'
      // Call to this.props.logout method is responsible for logging out.
      onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
