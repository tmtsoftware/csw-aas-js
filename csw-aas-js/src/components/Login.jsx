import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

/**
 * React component which renders Login button.
 */
const Login = () => {
  const { login } = useContext(AuthContext)
  return (
    <button
      id='aas-login'
      // Call to props.login method is responsible for resolving and instantiating AAS server
      onClick={login}>
      Login
    </button>
  )
}

export default Login
