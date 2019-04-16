package csw.aas.scalaJS.scalablyTyped.components.context

import typings.keycloakDashJsLib.keycloakDashJsMod._
import typings.reactLib
import typings.reactLib.reactMod.{Consumer, Context, Provider}

import scala.scalajs.js.UndefOr

case class KeycloakAuth(
    logout: KeycloakPromise[scala.Unit, scala.Unit],
    token: () => UndefOr[String],
    tokenParsed: () => UndefOr[KeycloakTokenParsed],
    realmAccess: () => UndefOr[KeycloakRoles],
    resourceAccess: () => UndefOr[KeycloakResourceAccess],
    loadUserProfile: KeycloakPromise[KeycloakProfile, scala.Unit],
    isAuthenticated: () => UndefOr[Boolean],
    hasRealmRole: String => Boolean,
    hasResourceRole: (String, String) => Boolean
)

case class AuthContextState(
    auth: UndefOr[KeycloakAuth],
    login: () => Boolean,
    logout: () => Boolean
)

object AuthContextState {
  val defaultState = AuthContextState(null, () => true, () => true)
}

object AuthContext {
  import reactLib.reactMod.^.createContext

  val authContext: Context[AuthContextState] = createContext(AuthContextState.defaultState)
  val provider: Provider[AuthContextState]   = authContext.Provider_Original
  val consumer: Consumer[AuthContextState]   = authContext.Consumer_Original
}
