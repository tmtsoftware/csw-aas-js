import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Login from '../../components/Login'
import renderer from 'react-test-renderer'
import { AuthContext } from '../../components/context/AuthContext'

// DEOPSCSW-630 - Javascript adapter for AAS
// DEOPSCSW-631 - React layer for javascript adapter for AAS
describe('<Login />', () => {
  Enzyme.configure({ adapter: new Adapter() })

  it('should call login', async () => {
    const authContext = { login: jest.fn() }
    const wrapper = await mount(
      <AuthContext.Provider value={{ ...authContext }}>
        <Login />
      </AuthContext.Provider>,
    )

    wrapper.find('button').simulate('click')

    expect(authContext.login).toHaveBeenCalled()

    wrapper.unmount()
  })

  it('should render login', () => {
    const props = {
      login: jest.fn(),
    }
    const login = renderer.create(<Login {...props} />).toJSON()
    expect(login).toMatchSnapshot()
  })
})
