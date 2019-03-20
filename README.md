# csw-js

This project includes following sub modules:
## csw-aas-js
This module is published at npm registry as a javascript library 
which provides re-usable react components for authentication and authorization.

## csw-aas-react4s-facade
This module is published at bintray so that any scalajs application can depend on it.
This is a simple scalajs facade written for `csw-aas-js`.

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
