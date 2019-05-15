import { AuthContextDefaultState } from '../../../components/context/AuthContext'

describe('<AuthContext />', () => {
  it('should have correct default state', () => {
    expect(AuthContextDefaultState.login()).toBe(undefined)
    expect(AuthContextDefaultState.logout()).toBe(undefined)
    expect(AuthContextDefaultState.auth).toBe(null)
  })
})
