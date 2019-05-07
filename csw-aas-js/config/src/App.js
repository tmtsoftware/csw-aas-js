import React from 'react'
import {ConfigsContextProvider} from "./new_app/context/ConfigsContext";
import {ConfigApp} from "./new_app/ConfigApp";
import {AppConfig} from "./config/AppConfig";
import { AuthContextProvider } from 'csw-aas-js'

export default () => <AuthContextProvider config={AppConfig}>
  <ConfigsContextProvider>
    <ConfigApp/>
  </ConfigsContextProvider>
</AuthContextProvider>
