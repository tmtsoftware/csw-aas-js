import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import CheckLogin from '../../../components/authentication/CheckLogin'
import { AuthContext } from '../../../components/context/AuthContext'

// DEOPSCSW-630 - Javascript adapter for AAS
// DEOPSCSW-631 - React layer for javascript adapter for AAS
describe('<CheckLogin />', () => {
  Enzyme.configure({ adapter: new Adapter() })

  beforeEach(() => {
    jest.resetModules()
  })

  it('should render children elements if authentication is true', () => {
    const authContext = {
      auth: {
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='auth'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <CheckLogin {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.auth').length).toBe(1)
    expect(wrapper.find('div.error').length).toBe(0)
  })

  it('should not render children elements if authentication is true', () => {
    const authContext = {
      auth: {
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='auth'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <CheckLogin {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.auth').length).toBe(0)
    expect(wrapper.find('div.error').length).toBe(1)
  })

  it('should render CheckLogin if authentication is true', () => {
    const authContext = {
      auth: {
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='auth'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
    }

    const checkLoginComponent = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <CheckLogin {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(checkLoginComponent).toMatchSnapshot()
  })

  it('should not render CheckLogin if authentication is false', () => {
    const authContext = {
      auth: {
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='auth'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
    }

    const checkLoginComponent = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <CheckLogin {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(checkLoginComponent).toMatchSnapshot()
  })

  it('should render nothing if CheckLogin if authentication is false and error component is not provided', () => {
    const authContext = {
      auth: {
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='auth'>Authentication successful</div>,
    }

    const checkLoginComponent = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <CheckLogin {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(checkLoginComponent).toMatchSnapshot()
  })
})
