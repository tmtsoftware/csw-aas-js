import org.scalablytyped.sbt.ScalablyTypedPlugin.autoImport.ScalablyTyped
import sbt._

object Dependencies {

  val AASReact4s = Def.setting(
    Seq(
      Libs.`scalatest`.value % Test,
      React4s.`react4s`.value
    )
  )

  val AASReact4sNpmDeps: Seq[(String, String)] = Seq(
    "react"      → "16.7.0",
    "react-dom"  → "16.7.0",
    "csw-aas-js" → "0.1.0-RC2"
  )

  val AASReact4sNpmDevDeps: Seq[(String, String)] = Seq(
    "babel-core"           → "6.26.3",
    "babel-polyfill"       → "6.26.0",
    "babel-preset-stage-0" → "6.24.1",
    "html-webpack-plugin"  → "3.2.0"
  )

  val Integration = Def.setting(
    Seq(
      Libs.`scalatest`.value    % Test,
      Libs.`selenium-java`      % Test,
      CSW.`csw-location-server` % Test,
      CSW.`csw-config-server`   % Test,
      Libs.`embedded-keycloak`  % Test,
      Libs.`webdrivermanager`   % Test
    )
  )

  val AasScalaJS = Def.setting(
    Seq(
      ScalablyTyped.E.`es6-promise`,
      ScalablyTyped.I.`isomorphic-fetch`,
      ScalablyTyped.K.`keycloak-js`,
      ScalablyTyped.R.`react`,
      ScalablyTyped.R.`react-dom`,
      ScalablyTyped.R.`react-router-dom`,
      ScalablyTyped.R.`react-contrib`
    )
  )

  val AasScalaJSNpmDeps: Seq[(String, String)] = Seq(
    "es6-promise" -> "4.2.6",
    "isomorphic-fetch" -> "0.0.35", //version not approapriate
    "keycloak-js" -> "5.0.0",
    "react" -> "16.8.6",
    "react-dom" -> "16.8.6",
    "react-router-dom" -> "^4.3.0"
  )

  val AasScalaJSNpmDevDeps: Seq[(String, String)] = Seq(
    "@svgr/rollup" -> "^2.4.1",
    "babel-core" -> "^6.26.3",
    "babel-eslint" -> "^9.0.0",
    "babel-plugin-external-helpers" -> "^6.22.0",
    "babel-preset-env" -> "^1.7.0",
    "babel-preset-react" -> "^6.24.1",
    "babel-preset-stage-0" -> "^6.24.1",
    "cross-env" -> "^5.1.4",
    "enzyme" -> "^3.8.0",
    "enzyme-adapter-react-16" -> "^1.7.1",
    "eslint" -> "5.12.0",
    "eslint-config-standard" -> "^11.0.0",
    "eslint-config-standard-react" -> "^6.0.0",
    "eslint-plugin-import" -> "^2.13.0",
    "eslint-plugin-node" -> "^7.0.1",
    "eslint-plugin-promise" -> "^4.0.0",
    "eslint-plugin-react" -> "^7.12.0",
    "eslint-plugin-standard" -> "^3.1.0",
    "gh-pages" -> "^1.2.0",
    "jest" -> "^23.6.0",
    "pm2" -> "^3.3.0",
    "prettier-eslint" -> "^8.8.2",
    "prettier-eslint-cli" -> "^4.7.1",
    "react" -> "^16.6.3",
    "react-dom" -> "^16.6.3",
    "react-test-renderer" -> "^16.7.0",
    "rollup" -> "^0.64.1",
    "rollup-plugin-babel" -> "^3.0.7",
    "rollup-plugin-commonjs" -> "^9.1.3",
    "rollup-plugin-json" -> "^3.1.0",
    "rollup-plugin-node-resolve" -> "^4.0.0",
    "rollup-plugin-peer-deps-external" -> "^2.2.0",
    "rollup-plugin-postcss" -> "^1.6.2",
    "rollup-plugin-url" -> "^1.4.0"
  )

}
