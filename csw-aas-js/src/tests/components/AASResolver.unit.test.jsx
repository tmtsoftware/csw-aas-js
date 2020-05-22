import {ServiceResolver} from '../../components/ServiceResolver'

// DEOPSCSW-630 - Javascript adapter for AAS
// DEOPSCSW-631 - React layer for javascript adapter for AAS
// DEOPSCSW-590 - Set up AAS for Prod
describe('<ServiceResolver />', () => {
  it('should resolveAAS', async () => {
    const mockResponse = {
      status: 200,
      json: jest.fn().mockImplementation(() => {
        return [{
          _type: "HttpLocation",
          uri: "http://somehost:someport"
        }]
      }),
    };

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse)
    );

    const url = await ServiceResolver('AAS-service-http');
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(url).toBe('http://somehost:someport')
  })
});
