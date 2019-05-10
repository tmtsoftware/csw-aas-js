import * as React from 'react'
import {
  KeycloakPromise,
  KeycloakTokenParsed,
  KeycloakRoles,
  KeycloakResourceAccess,
  KeycloakProfile,
} from 'keycloak-js'


export interface Auth {
  logout?:  KeycloakPromise<void, void>,
  token?: () => string,
  tokenParsed?: () => KeycloakTokenParsed,
  realmAccess?: () => KeycloakRoles, // todo: should this be called realmRoles?
  resourceAccess?: () => KeycloakResourceAccess, // todo: should this be called resourceRoles?
  loadUserProfile?: KeycloakPromise<KeycloakProfile, void>,
  isAuthenticated?: () => boolean,
  hasRealmRole?: (role: string) => boolean,
  hasResourceRole: (role: string, resource?: string) => boolean,
}


export interface AuthContext {
  auth: Auth,
  login: () => void,
  logout: () => void
}

export const Consumer: React.Consumer<AuthContext>

export interface AuthConfig {
  realm: string,
  clientId: string
}

export interface AuthContextProviderProps {
  config: AuthConfig,
  children: React.ReactNode
}

export const AuthContextProvider: React.FunctionComponent<AuthContextProviderProps>

export interface CheckLoginProps {
  children?: React.ReactNode,
  error?: React.ReactNode
}

export const CheckLogin: React.FunctionComponent<CheckLoginProps>

export interface ClientRoleProps {
  clientRole: string,
  client?: string,
  children?: React.ReactNode,
  error?: React.ReactNode
}

export const ClientRole: React.FunctionComponent<ClientRoleProps>

export const Login: React.ComponentType

export const Logout: React.ComponentType

export interface RealmRoleProps {
  realmRole: string,
  children?: React.ReactNode,
  error?: React.ReactNode
}

export const RealmRole: React.FunctionComponent<RealmRoleProps>
