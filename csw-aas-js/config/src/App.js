import React from 'react'
import {ConfigsContextProvider} from "./new_app/context/ConfigsContext";
import {ConfigApp} from "./new_app/ConfigApp";
import {AppConfig} from "./config/AppConfig";
import {AuthContextProvider} from 'csw-aas-js'
import 'typeface-roboto';
import {UiContextProvider} from "./new_app/context/UiContext";

export default () => <AuthContextProvider config={AppConfig}>
  <ConfigsContextProvider>
    <UiContextProvider>
      <ConfigApp/>
    </UiContextProvider>
  </ConfigsContextProvider>
</AuthContextProvider>
