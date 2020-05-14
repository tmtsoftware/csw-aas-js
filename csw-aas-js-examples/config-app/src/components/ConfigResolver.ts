import { Config } from '../config/configs'

/**
 * Utility method responsible for resolving Config server using location service
 *
 * @returns Config url if resolved from location service else return null
 */
const resolveConfig: () => Promise<string | null> = async () => {
  // URL constant which contains location service end point for resolving Config server

  const URL = `${Config['location-server-url']}/post-endpoint`

  const resolveRequest = {
    _type: 'Resolve',
    connection: {
      prefix: 'CSW.ConfigServer',
      componentType: 'service',
      connectionType: 'http',
    },
    within: '5 seconds',
  }

  const response = await window.fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(resolveRequest),
  })

  if (response.status === 200) {
    const jsonResponse = await response.json()
    return jsonResponse[0].uri
  }
  return null
}

class ConfigResolver {
  public getConfigUrl: () => Promise<string> = async () => {
    const url = await resolveConfig()
    return url || Config['Config-server-url']
  }
}

export const configResolver = new ConfigResolver()
