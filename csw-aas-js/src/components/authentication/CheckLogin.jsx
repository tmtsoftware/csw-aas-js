import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../context/AuthContext'

/**
 * React component which renders children if authenticated and error if unauthenticated
 * @param children (optional prop) can be react components or html element which will be rendered
 * if user is authenticated
 * @param error (optional prop) can be react components or html element which will be rendered
 * if user is not authenticated
 */
const CheckLogin = ({ children, error }) => {
  const { auth } = useContext(AuthContext)
  if (!auth) return error
  return auth.isAuthenticated() ? children : error || null
}

CheckLogin.propTypes = {
  children: PropTypes.node,
  error: PropTypes.node,
}

export default CheckLogin
