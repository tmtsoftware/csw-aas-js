import * as React from 'react'
import {
  KeycloakProfile,
  KeycloakPromise,
  KeycloakResourceAccess,
  KeycloakRoles,
  KeycloakTokenParsed,
} from 'keycloak-js'

export interface Auth {
  logout?: (options?: any) => KeycloakPromise<void, void>
  token?: () => string | undefined
  tokenParsed?: () => KeycloakTokenParsed | undefined
  realmAccess?: () => KeycloakRoles | undefined // todo: should this be called realmRoles?
  resourceAccess?: () => KeycloakResourceAccess | undefined // todo: should this be called resourceRoles?
  loadUserProfile?: () => KeycloakPromise<KeycloakProfile, void>
  isAuthenticated?: () => boolean | undefined
  hasRealmRole?: (role: string) => boolean
  hasResourceRole: (role: string, resource?: string) => boolean
}

interface AuthContextType {
  auth: Auth | null
  login: () => void
  logout: () => void
}

export const AuthContext: React.Context<AuthContextType>

export const Consumer: React.Consumer<AuthContextType>

export interface AuthConfig {
  realm: string
  clientId: string
}

export interface AuthContextProviderProps {
  config: AuthConfig
  children: React.ReactNode
}

export const AuthContextProvider: React.FunctionComponent<
  AuthContextProviderProps
>

export interface CheckLoginProps {
  children?: React.ReactNode
  error?: React.ReactNode
}

export const CheckLogin: React.FunctionComponent<CheckLoginProps>

export interface ClientRoleProps {
  clientRole: string
  client?: string
  children?: React.ReactNode
  error?: React.ReactNode
}

export const ClientRole: React.FunctionComponent<ClientRoleProps>

export const Login: React.ComponentType

export const Logout: React.ComponentType

export interface RealmRoleProps {
  realmRole: string
  children?: React.ReactNode
  error?: React.ReactNode
}

export const RealmRole: React.FunctionComponent<RealmRoleProps>
