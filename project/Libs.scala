import org.portablescala.sbtplatformdeps.PlatformDepsPlugin.autoImport._
import sbt.Def.{setting => dep}
import sbt._

object Libs {
  val ScalaVersion = "2.13.1"

  val `scalatest` = dep("org.scalatest" %%% "scalatest" % "3.0.8") //Apache License 2.0

  val `selenium-java`        = "org.seleniumhq.selenium"                  % "selenium-java"         % "3.141.59"
  val `embedded-keycloak`    = "com.github.tmtsoftware.embedded-keycloak" %% "embedded-keycloak"    % "25558ff2"
  val `webdrivermanager`     = "io.github.bonigarcia"                     % "webdrivermanager"      % "3.7.1"
  val `akka-http-spray-json` = "com.typesafe.akka"                        %% "akka-http-spray-json" % "10.1.11"

  val `scala-async` = dep("org.scala-lang.modules" %% "scala-async"  % "0.10.0")
  val `scalajs-dom` = dep("org.scala-js"           %%% "scalajs-dom" % "0.9.7")
}

object CSW {
  val Version: String = {
    val env = sys.env ++ sys.props
    env.getOrElse("CSW_VERSION", "2.0.1")
  }

  val `csw-location-server` = "com.github.tmtsoftware.csw" %% "csw-location-server" % Version
  val `csw-config-server`   = "com.github.tmtsoftware.csw" %% "csw-config-server"   % Version
}

object React4s {
  val `react4s`  = dep("com.github.ahnfelt" %%% "react4s"  % "0.9.24-SNAPSHOT")
  val `router4s` = dep("com.github.werk"    %%% "router4s" % "0.1.0-SNAPSHOT")
}
