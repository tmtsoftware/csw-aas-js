import sbt._

object Dependencies {

  val AASReact4s = Def.setting(
    Seq(
      Libs.`scalatest`.value % Test,
      React4s.`react4s`.value,
      React4s.`router4s`.value
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

}
