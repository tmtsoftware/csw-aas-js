# Releasing

## Prerequisites

### Git
* Make sure git authentication works on jenkins agent by running cmd: `ssh -vT git@github.com`

### npm
* make sure `npm` authentication works for the system user who is running the *agent.jar* on jenkins agent machine.
(Try running `npm whoami` command)

## Steps to release

1. Update release notes (`notes/<version>.markdown`)
2. Update top-level `CHANGELOG.md`
3. Update top-level `README.md`
4. Check if `csw-aas-js-dev` pipeline is green
5. Check keycloak version of `csw` and `csw-aas-js` is same
6. Update `VERSION` number in `csw-aas-js/package.json`
7. Run `csw-aas-js-prod` pipeline by providing `VERSION` number and compatible `CSW_VERSION` number.