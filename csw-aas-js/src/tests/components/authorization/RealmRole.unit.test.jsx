import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import RealmRole from '../../../components/authorization/RealmRole'
import { AuthContext } from '../../../components/context/AuthContext'

// DEOPSCSW-630 - Javascript adapter for AAS
// DEOPSCSW-636 - JS adapter support  for Authorization
describe('<RealmRole />', () => {
  Enzyme.configure({ adapter: new Adapter() })

  beforeEach(() => {
    jest.resetModules()
  })

  it('should render children elements if authentication is true and with valid realm role', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }
    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      realmRole: 'test-realm-role',
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <RealmRole {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.realm-role').length).toBe(1)
    expect(wrapper.find('div.error').length).toBe(0)
  })

  it('should not render children elements if authentication is true but invalid realm role', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return false
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }
    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      realmRole: 'invalid-realm-role',
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <RealmRole {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.realm-role').length).toBe(0)
    expect(wrapper.find('div.error').length).toBe(1)
  })

  it('should not render children elements if authentication is false ', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      realmRole: 'invalid-realm-role',
    }

    const wrapper = mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <RealmRole {...props} />
      </AuthContext.Provider>,
    )

    expect(wrapper.find('div.realm-role').length).toBe(0)
    expect(wrapper.find('div.error').length).toBe(1)
  })

  it('should render RealmRoleComponent if authentication is true and with valid realm role', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      realmRole: 'test-realm-role',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <RealmRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should not render RealmRoleComponent if authentication is true but invalid realm role', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return false
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return true
        }),
      },
    }

    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      realmRole: 'invalid-realm-role',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <RealmRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should not render RealmRoleComponent elements if authentication is false ', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      error: <div className='error'>Authentication unsuccessful</div>,
      realmRole: 'invalid-realm-role',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <RealmRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should render nothing if authentication is false and no error component is provided ', () => {
    const authContext = {
      auth: {
        hasRealmRole: jest.fn().mockImplementation(() => {
          return true
        }),
        isAuthenticated: jest.fn().mockImplementation(() => {
          return false
        }),
      },
    }

    const props = {
      children: <div className='realm-role'>Authentication successful</div>,
      realmRole: 'invalid-realm-role',
    }

    const component = renderer
      .create(
        <AuthContext.Provider value={{ ...authContext }}>
          <RealmRole {...props} />
        </AuthContext.Provider>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})
