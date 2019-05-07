import React from 'react'
import {ConfigsContextProvider} from "./new_app/context/ConfigsContext";
import {ConfigApp} from "./new_app/ConfigApp";

export default () => <ConfigsContextProvider>
  <ConfigApp />
</ConfigsContextProvider>
