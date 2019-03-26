import org.portablescala.sbtplatformdeps.PlatformDepsPlugin.autoImport._
import sbt.Def.{setting ⇒ dep}
import sbt._

object Libs {
  val ScalaVersion   = "2.12.8"
  val AcyclicVersion = "0.1.8"

  val `scalatest` = dep("org.scalatest" %%% "scalatest" % "3.0.5") //Apache License 2.0
  val `acyclic`   = "com.lihaoyi" %% "acyclic" % AcyclicVersion % Provided //MIT License

  val `selenium-java`     = "org.seleniumhq.selenium" % "selenium-java"     % "3.141.59"
  val `embedded-keycloak` = "com.github.tmtsoftware"  % "embedded-keycloak" % "aa531d0c79"
  val `webdrivermanager`  = "io.github.bonigarcia"    % "webdrivermanager"  % "3.3.0"

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
