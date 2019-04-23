import React, { useState, useEffect } from 'react'
import { Provider } from './AuthContext'
import PropTypes from 'prop-types'
import { Auth } from '../Auth'

/**
 * React component which is wrapper over provider of react context api.
 * Responsible for instantiating keycloak and provide context value to consumers
 * props -
 * config json specific to UI application e.g. realm and clientId
 * children - react component or html element which can have consumer to access
 * context provided
 */
const AuthContextProvider = props => {
  const [auth, setauth] = useState(undefined)

  useEffect(() => {
    loginWithoutRedirect()
  }, [])

  /**
   * Instantiate keycloak and sets TMTAuthStore instance in state. This state can be provided
   * as a context
   */
  const instantiateAAS = async (url, redirect) => {
    const { keycloak, authenticated } = await Auth.authenticate(
      props.config,
      url,
      redirect,
    )
    authenticated
      .success(() => {
        const _auth = Auth.from(keycloak)
        setauth(_auth)
      })
      .error(() => {
        setauth(null)
      })
  }

  /**
   * Resolves AAS server and instantiate keycloak in check-sso mode
   */
  const loginWithoutRedirect = async () => {
    const url = await Auth.getAASUrl()
    await instantiateAAS({ url: url }, false)
  }

  /**
   * Resolves AAS server and instantiate keycloak in login-required mode
   */
  const login = async () => {
    const url = await Auth.getAASUrl()
    await instantiateAAS({ url: url }, true)
  }

  const logout = async () => {
    const logoutPromise = await auth.logout()
    logoutPromise.success(() => {
      setauth(null)
    })
  }

  return (
    <Provider value={{ auth: auth, login: login, logout: logout }}>
      {props.children}
    </Provider>
  )
}

AuthContextProvider.propTypes = {
  config: PropTypes.object,
  children: PropTypes.node,
}

export default AuthContextProvider
