import React from 'react'
import IOOperationComponent from './IOOperationComponent'

class GetConfig extends React.Component {
  state = { response: null }

  downloadURI = uri => {
    let link = document.createElement('a')
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  getConfig = async input => {
    console.log(input)
    this.downloadURI(`http://localhost:4000/config/${input}`)
  }

  render() {
    return (
      <IOOperationComponent
        txtId='get-config'
        btnId='get-config'
        componentNameProp='Get Config'
        operation='Get'
        output={this.state.response}
        api={this.getConfig}
      />
    )
  }
}

export default GetConfig
