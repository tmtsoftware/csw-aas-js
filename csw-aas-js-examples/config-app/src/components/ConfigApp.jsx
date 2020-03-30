import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ClientRole, AuthContextProvider } from 'csw-aas-js'
import NavComponent from './NavComponent'
import { AppConfig } from '../config/AppConfig'
import CreateConfig from './CreateConfig'
import ConfigError from './ConfigError'
import ListConfig from './ListConfig'
import GetConfig from './GetConfig'

const ConfigApp = () => {
  return (
    <div className='row card col s12 m7'>
      <AuthContextProvider config={AppConfig}>
        <BrowserRouter>
          <div>
            <NavComponent />
          </div>
        </BrowserRouter>
        <ListConfig />
        <GetConfig />
        {
          // #create-config-component
          <ClientRole
            clientRole='admin'
            client='csw-config-server'
            error={<ConfigError />}>
            <CreateConfig />
          </ClientRole>
          // #create-config-component
        }
      </AuthContextProvider>
    </div>
  )
}

export default ConfigApp
