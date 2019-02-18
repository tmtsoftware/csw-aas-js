import React from 'react'
import PropTypes from 'prop-types'

class IOOperationComponent extends React.Component {
  constructor() {
    super()
    this.state = { input: '' }
  }

  render() {
    const { txtId, btnId, componentNameProp, operation, output } = this.props

    return (
      <div className='card-panel hoverable'>
        <h6>{componentNameProp} Request</h6>
        <div>
          <span>
            <textarea
              id={txtId + '-txt-area'}
              value={this.state.input}
              onChange={this.updateInput}
            />
          </span>
        </div>
        <div>
          <button id={btnId + '-btn'} onClick={this.handleClick}>
            {operation}
          </button>
        </div>
        <div>
          <span>
            <div id={btnId + '-output'}> {output} </div>
          </span>
        </div>
      </div>
    )
  }

  updateInput = event => {
    this.setState({
      input: event.target.value,
    })
  }

  handleClick = event => {
    this.props.api(this.state.input, this.props.token)
  }
}

IOOperationComponent.propTypes = {
  txtId: PropTypes.string,
  btnId: PropTypes.string,
  componentNameProp: PropTypes.string,
  operation: PropTypes.string,
  output: PropTypes.string,
  api: PropTypes.func,
  token: PropTypes.func,
}

export default IOOperationComponent
