# csw-js

This project provides javascript and scalajs libraries for Authentication and Authorization Service (AAS) provided by CSW.
This will help build an browser based applications that enforce authentication & authorization policies for TMT.

The backbone of AAS is the [Keycloak](https://www.keycloak.org/documentation.html). It is where all client and server applications need to be registered and configured.
We are using javascript adapter called [keycloak-js](https://www.npmjs.com/package/keycloak-js) provided by Keycloak as a underlying mechanism to talk to keycloak.
As a consumer of this project, you need not to be worried about this. You will always be interacting with libraries provided by `csw` which are just wrapper over keycloak. 


## Version compatibility

csw-js v1.0.0 version is compatible with v1.0.0 of csw.

This project includes following sub modules:
## csw-aas-js
This module is published at npm registry as a javascript library which provides re-usable react components for authentication and authorization.
See [csw-aas-js](https://tmtsoftware.github.io/csw-js/1.0.0/aas/csw-aas-js) docs for details.

## csw-aas-react4s-facade
This module provides statically typed API for the `csw-aas-js` adapter for Scala.js programs.

### Example
```scala
    import csw.aas.react4s.facade.context.{AuthContext, AuthContextProvider}
    import csw.aas.react4s.facade.components._

    AuthContextProvider(
      Config,
      CheckLogin(
        error = Login(),
        children = Logout()
      )
    )
    
    object Config extends AuthConfig {
      override val realm: String    = "example"
      override val clientId: String = "example-app"
    }
```
Above example shows usage of two components provided by `csw-aas-react4s-facade`.
1. `AuthContextProvider`: This maps to auth context provided by `csw-aas-js`. This takes following typed parameters, 

    1.1. `AuthConfig`: Keycloak configuration
    
    1.2. `Node*`: Nodes which are React components created via [react4s](https://github.com/Ahnfelt/react4s) library which is a facade over javascript react library
    
2. `CheckLogin`: Typed component provided by `csw-aas-react4s-facade` which takes two params

    2.1. Error component: Gets rendered if user is not authenticated
    
    2.2. Children components: Gets rendered if user is authenticated

## csw-aas-react4s-example
This demonstrate usage of `csw-aas-react4s-facade`.
To run this application, following pre-requisites are must:
1. Make sure that you have following csw services up and running:
    
    1.1. Location Service
    
    1.2. AAS service
    
    1.3. Config Service
    
    Note: Simple way to start all these services is to run `csw-services.sh` script from `csw` github repository.
    IMPORTANT: `csw-services.sh` starts `aas` service in `--testMode` but for this example, you need to run `aas` in example mode.
    To do this, update `csw-services.sh` script before running `sbt stage`
    
    Replace this: `nohup ./configure.sh -p ${aas_port} -u ${aas_admin_user} --password ${aas_admin_password} --locationHttpPort ${location_http_port} --testMode &> ${AASLogFile} &`
    
    with: `nohup ./configure.sh -p ${aas_port} -u ${aas_admin_user} --password ${aas_admin_password} --locationHttpPort ${location_http_port} --exampleMode &> ${AASLogFile} &`
    
2. Install and build `csw-aas-js`

    2.1. `cd csw-aas-js`
    
    2.2. `npm install`
    
    2.3. `npm run build` 

Once above pre-requisites are satisfied, then follow below steps to run example:
1. Enter into `sbt` shell
2. Run command `csw-aas-react4s-example/fastOptJS::startWebpackDevServer` from that shell
3. Navigate to `http://localhost:8080/index.html`
4. Login (Credentials - Username: `test-user` Password: `abcd`)
5. Verify logs from browser console

## Integration
This module includes E2E test which demonstrate following flow which is all automated:
1. Start Location, Config and AAS csw services
2. Build and Install `csw-aas-js`
3. Build and Start `config` example (csw-aas-js/config)
4. Create configuration file

To run this test, execute `sbt test` or `sbt integration/test` command

## Troubleshooting

If `sbt test` fails with an error stating that `http://localhost:3000` is not accessible, it may be this [issue](https://github.com/facebook/create-react-app/issues/2844). 
The solution is to unset the `HOST` environment variable before running the test.

