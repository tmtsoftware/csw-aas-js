import React, { useState } from 'react'
import IOOperationComponent from './IOOperationComponent'
import {ServiceResolver} from "csw-aas-js";
import {Config} from "../config/configs";

const ListConfig = () => {
  const [response, setResponse] = useState('')

  const listConfig = async () => {
    const configURL = await ServiceResolver(Config['Config-server-name']) || Config['Config-server-url']

    const response = await window.fetch(`${configURL}list`)
    if (response.status === 200) {
      const a = await response.json()
      setResponse(JSON.stringify(a))
    }
  }

  return (
    <IOOperationComponent
      txtId='list-config'
      btnId='list-config'
      componentNameProp='List Config'
      operation='List'
      output={response}
      api={listConfig}
    />
  )
}

export default ListConfig
