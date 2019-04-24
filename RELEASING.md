# Releasing

## Prerequisites

### Git
* Make sure git authentication works on jenkins agent by running cmd: `ssh -vT git@github.com`

### npm
* make sure `npm` authentication works for `root` user on jenkins agent. (Try running `npm whoami` command)

## Steps to release

1. Check if `csw-aas-js-dev` pipeline is green
2. Check keycloak version of `csw` and `csw-aas-js` is same
3. Update `VERSION` number in `package.json`
4. Run `csw-aas-js-prod` pipeline by providing `VERSION` number and compatible `CSW_VERSION` number.