import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import ClientRole from '../../../components/authorization/ClientRole'
import { AuthContext } from '../../../components/context/AuthContext'

// DEOPSCSW-630 - Javascript adapter for AAS
// DEOPSCSW-636 - JS adapter support  for Authorization
describe('<ClientRole />', () => {
  Enzyme.configure({ adapter: new Adapter() })

  beforeEach(() => {
    jest.resetModules()
  })

  it('should render children elements if authentication is true and with valid Client role', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      clientRole: 'test-client-role',
      client: 'test-client',
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <ClientRole {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.client-role').length).toBe(1)
    expect(wrapper.find('div.error').length).toBe(0)
  })

  it('should not render children elements if authentication is true but invalid Client role', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return false
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      clientRole: 'invalid-client-role',
      client: 'invalid-client',
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <ClientRole {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.client-role').length).toBe(0)
    expect(wrapper.find('div.error').length).toBe(1)
  })

  it('should not render children elements if authentication is false ', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      clientRole: 'invalid-client-role',
      client: 'invalid-client',
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <ClientRole {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.client-role').length).toBe(0)
    expect(wrapper.find('div.error').length).toBe(1)
  })

  it('should render ClientRole if authentication is true and with valid Client role', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      clientRole: 'test-client-role',
      client: 'test-client',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <ClientRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should not render ClientRole if authentication is true but invalid Client role', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return false
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      clientRole: 'invalid-client-role',
      client: 'invalid-client',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <ClientRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should not render ClientRole if authentication is false ', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      clientRole: 'invalid-client-role',
      client: 'invalid-client',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <ClientRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should render nothing if authentication is false and error component is not provided', () => {
    const authContext = {
      auth: {
        hasResourceRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='client-role'>Authentication successful</div>,
      clientRole: 'invalid-client-role',
      client: 'invalid-client',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <ClientRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
