import {Config} from '../config/configs'

/**
 * Utility method responsible for resolving AAS server using location service
 *
 * @returns AAS url if resolved from location service else return null
 */
export const resolveAAS: () => Promise<string | null> = async () => {
  // URL constant which contains location service end point for resolving AAS server

  const URL = `${Config['location-server-url']}/post-endpoint`

  const resolveRequest = {
    Resolve: {
      connection: {
        prefix: "csw.AAS",
        componentType: 'service',
        connectionType: 'http',
      },
      within: '5 seconds',
    },
  }

  const response = await window.fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(resolveRequest),
  })

  if (response.status === 200) {
    const jsonResponse = await response.json()
    return jsonResponse[0].HttpLocation.uri
  }
  return null
}
