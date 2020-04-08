import sbt._

object Libs {
  val ScalaVersion = "2.13.1"

  val `scalatest`            = "org.scalatest"                            %% "scalatest"            % "3.0.8" //Apache License 2.0
  val `selenium-java`        = "org.seleniumhq.selenium"                  % "selenium-java"         % "3.141.59"
  val `embedded-keycloak`    = "com.github.tmtsoftware.embedded-keycloak" %% "embedded-keycloak"    % "e81784b"
  val `webdrivermanager`     = "io.github.bonigarcia"                     % "webdrivermanager"      % "3.8.1"
  val `akka-http-spray-json` = "com.typesafe.akka"                        %% "akka-http-spray-json" % "10.1.11"
}

object CSW {
  val Version: String = {
    val env = sys.env ++ sys.props
    env.getOrElse("CSW_VERSION", "master-SNAPSHOT")
  }

  val `csw-location-server` = "com.github.tmtsoftware.csw" %% "csw-location-server" % Version
  val `csw-config-server`   = "com.github.tmtsoftware.csw" %% "csw-config-server"   % Version
}
