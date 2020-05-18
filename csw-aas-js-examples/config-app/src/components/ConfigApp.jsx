import React, {useEffect, useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {AuthContextProvider, ClientRole, ServiceResolver} from 'csw-aas-js'
import NavComponent from './NavComponent'
import {AppConfig} from '../config/AppConfig'
import CreateConfig from './CreateConfig'
import ConfigError from './ConfigError'
import ListConfig from './ListConfig'
import GetConfig from './GetConfig'
import {Config} from "../config/configs";

const ConfigApp = () => {
  const [configURL, setconfigURL] = useState(null);

  const resolveConfigServer = async () => {
    const response = await ServiceResolver(Config['Config-server-name']) || Config['Config-server-url'];
    setconfigURL(response)
  }

  useEffect(() => {
    resolveConfigServer();
  }, []);

  return (
    <div className='row card col s12 m7'>
      <AuthContextProvider config={AppConfig}>
        <BrowserRouter>
          <div>
            <NavComponent />
          </div>
        </BrowserRouter>
        <ListConfig configURL={configURL}/>
        <GetConfig configURL={configURL}/>
        {
          // #create-config-component
          <ClientRole
            clientRole='admin'
            client='csw-config-server'
            error={<ConfigError />}>
            <CreateConfig configURL={configURL}/>
          </ClientRole>
          // #create-config-component
        }
      </AuthContextProvider>
    </div>
  )
}

export default ConfigApp
