import { Config } from '../config/configs'

/**
 * Utility method responsible for resolving AAS server using location service
 *
 * @returns AAS url if resolved from location service else return null
 */
export const resolveAAS: () => Promise<string | null> = async () => {
  // URL constant which contains location service end point for resolving AAS server
  const URL = `${Config['location-server-url']}/location/resolve/${
    Config['AAS-server-name']
  }?within=5seconds`

  const response = await window.fetch(URL)
  if (response.status === 200) {
    const jsonResponse = await response.json()
    return jsonResponse.uri
  }
  return null
}
