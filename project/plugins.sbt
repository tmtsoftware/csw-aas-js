addSbtPlugin("com.geirsson"                      % "sbt-scalafmt"               % "1.5.1")
addSbtPlugin("com.dwijnand"                      % "sbt-dynver"                 % "3.1.0")
addSbtPlugin("com.eed3si9n"                      % "sbt-unidoc"                 % "0.4.2")
addSbtPlugin("com.thoughtworks.sbt-api-mappings" % "sbt-api-mappings"           % "2.0.1")
addSbtPlugin("com.typesafe.sbt"                  % "sbt-ghpages"                % "0.6.2")
addSbtPlugin("com.typesafe.sbt"                  % "sbt-site"                   % "1.3.2")
addSbtPlugin("com.typesafe.sbt"                  % "sbt-native-packager"        % "1.3.15")
addSbtPlugin("com.eed3si9n"                      % "sbt-buildinfo"              % "0.9.0")
addSbtPlugin("io.github.jonas"                   % "sbt-paradox-material-theme" % "0.6.0")
addSbtPlugin("io.spray"                          % "sbt-revolver"               % "0.9.1")
addSbtPlugin("org.scala-js"                      % "sbt-scalajs"                % "0.6.26")
addSbtPlugin("ch.epfl.scala"                     % "sbt-web-scalajs-bundler"    % "0.14.0")
addSbtPlugin("ch.epfl.scala"                     % "sbt-scalajs-bundler"        % "0.14.0")

addSbtCoursier
classpathTypes += "maven-plugin"
