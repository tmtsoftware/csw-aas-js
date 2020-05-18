import { Config } from '../config/configs'

/**
 * Utility method responsible for resolving a service using location service
 *
 * @returns Service url if resolved from location service else return null
 */
export const ServiceResolver: (serviceName:string) => Promise<string | null> = async (serviceName:string) => {

  const locationServerURL = `${Config['location-server-url']}/post-endpoint`
  const serviceNameSplit = serviceName.split("-",3)

  const resolveRequest = {
    _type: 'Resolve',
    connection: {
      prefix: serviceNameSplit[0],
      componentType: serviceNameSplit[1],
      connectionType: serviceNameSplit[2],
    },
    within: '5 seconds',
  }

  const response = await window.fetch(locationServerURL, {
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

