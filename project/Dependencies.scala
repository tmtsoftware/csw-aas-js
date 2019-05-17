import sbt._

object Dependencies {

  val AASSjs = Def.setting(
    Seq(
      Sjs.`keycloak`,
      Sjs.`react`,
      Sjs.`react-facade`,
      Sjs.`react-dom`,
      Libs.`scala-async`.value,
      Libs.`scalajs-dom`.value,
      Libs.`scalatest`.value % Test
    )
  )
  
  val AASSjsNpmDeps: Seq[(String, String)] = Seq(
    "react"       → "16.8.6",
    "react-dom"   → "16.8.6",
    "keycloak-js" → "5.0.0"
  )

  val AASReact4s = Def.setting(
    Seq(
      Libs.`scalatest`.value % Test,
      React4s.`react4s`.value
    )
  )

  val AASReact4sNpmDeps: Seq[(String, String)] = Seq(
    "react"      → "16.8.6",
    "react-dom"  → "16.8.6",
    "csw-aas-js" → "0.1.0-RC2"
  )

  val AASReact4sNpmDevDeps: Seq[(String, String)] = Seq(
    "babel-core"            → "6.26.3",
    "babel-polyfill"        → "6.26.0",
    "@babel/preset-stage-0" → "7.0.0",
    "html-webpack-plugin"   → "3.2.0"
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

}
