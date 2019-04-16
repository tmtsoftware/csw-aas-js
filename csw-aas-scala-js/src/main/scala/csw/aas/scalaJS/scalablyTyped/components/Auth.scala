package csw.aas.scalaJS.scalablyTyped.components
import csw.aas.scalaJS.scalablyTyped.components.context.KeycloakAuth
import csw.aas.scalaJS.scalablyTyped.config.Constants._
import typings.keycloakDashJsLib.keycloakDashJsLibStrings.{`check-sso`, `login-required`, hybrid}
import typings.keycloakDashJsLib.keycloakDashJsMod.{
  KeycloakError,
  KeycloakInitOptions,
  KeycloakInstance,
  KeycloakPromise,
  KeycloakPromiseCallback,
  ^ => Keycloak
}
import typings.stdLib.^.console

import scala.scalajs.js

class Auth() {
  def from(keycloak: KeycloakInstance): KeycloakAuth = {
    KeycloakAuth(
      logout = keycloak.logout,
      token = () => keycloak.token,
      tokenParsed = () => keycloak.tokenParsed,
      realmAccess = () => keycloak.realmAccess,
      resourceAccess = () => keycloak.resourceAccess,
      loadUserProfile = keycloak.loadUserProfile(),
      isAuthenticated = () => keycloak.authenticated,
      hasRealmRole = keycloak.hasRealmRole,
      hasResourceRole = keycloak.hasResourceRole
    )
  }

  def authenticate(config: String,
                   url: String,
                   redirect: Boolean): (KeycloakInstance, KeycloakPromise[Boolean, KeycloakError]) = {
    console.info("instantiating AAS")
    val urlMap = Map("url" -> url)
    import js.JSConverters._
    val keycloak: KeycloakInstance = Keycloak((AASConfig ++ Config ++ urlMap).toJSDictionary.asInstanceOf[js.Object])

    val onSuccess: KeycloakPromiseCallback[Boolean] = _ => console.info("token refreshed successfully")
    val onError: KeycloakPromiseCallback[Boolean]   = _ => console.info("Failed to refresh the token, or the session has expired")
    keycloak.onTokenExpired = { () =>
      {
        keycloak
          .updateToken(0)
          .success(onSuccess)
          .error(onError)
      }
    }: js.Function0[Unit]

    val authenticated: KeycloakPromise[Boolean, KeycloakError] = keycloak.init(
      KeycloakInitOptions(
        onLoad = if (redirect) `login-required` else `check-sso`,
        flow = hybrid
      )
    )
    (keycloak, authenticated)
  }
}

object Auth {
  def apply: Auth = new Auth()
}
