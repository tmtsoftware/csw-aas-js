import org.portablescala.sbtplatformdeps.PlatformDepsPlugin.autoImport._
import org.scalablytyped.sbt.ScalablyTypedPlugin.autoImport.ScalablyTyped
import sbt.Def.{setting ⇒ dep}
import sbt._

object Libs {
  val ScalaVersion   = "2.12.8"
  val AcyclicVersion = "0.1.8"

  val `scalatest` = dep("org.scalatest" %%% "scalatest" % "3.0.6") //Apache License 2.0
  val `acyclic`   = "com.lihaoyi" %% "acyclic" % AcyclicVersion % Provided //MIT License

  val `selenium-java`     = "org.seleniumhq.selenium" % "selenium-java"     % "3.141.59"
  val `embedded-keycloak` = "com.github.tmtsoftware"  % "embedded-keycloak" % "0.1.2"
  val `webdrivermanager`  = "io.github.bonigarcia"    % "webdrivermanager"  % "3.4.0"

  val `scala-async` = dep("org.scala-lang.modules" %% "scala-async"  % "0.10.0")
  val `scalajs-dom` = dep("org.scala-js"           %%% "scalajs-dom" % "0.9.7")
}

object Sjs {
  val `keycloak`     = ScalablyTyped.K.`keycloak-js`
  val `react-facade` = ScalablyTyped.R.`react-facade`
  val `react`        = ScalablyTyped.R.`react`
  val `react-dom`    = ScalablyTyped.R.`react-dom`
}

object CSW {
  val Version: String = {
    val env = sys.env ++ sys.props
    env.getOrElse("CSW_VERSION", "master-SNAPSHOT")
  }

  val `csw-location-server` = "com.github.tmtsoftware.csw" %% "csw-location-server" % Version
  val `csw-config-server`   = "com.github.tmtsoftware.csw" %% "csw-config-server"   % Version
}

object React4s {
  val `react4s`  = dep("com.github.ahnfelt" %%% "react4s"  % "0.9.24-SNAPSHOT")
  val `router4s` = dep("com.github.werk"    %%% "router4s" % "0.1.0-SNAPSHOT")
}
