import { resolveAAS } from '../../components/AASResolver'

// DEOPSCSW-630 - Javascript adapter for AAS
// DEOPSCSW-631 - React layer for javascript adapter for AAS
// DEOPSCSW-590 - Set up AAS for Prod
describe('<AASResolver />', () => {
  it('should resolveAAS', async () => {
    const mockResponse = {
      status: 200,
      json: jest.fn().mockImplementation(() => {
        return { uri: 'http://somehost:someport' }
      }),
    }

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse)
    );

    const url = await resolveAAS()
    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(url).toBe('http://somehost:someport')
  })
})
