addSbtPlugin("com.geirsson"     % "sbt-scalafmt"               % "1.5.1")
addSbtPlugin("com.dwijnand"     % "sbt-dynver"                 % "3.1.0")
addSbtPlugin("com.typesafe.sbt" % "sbt-ghpages"                % "0.6.2")
addSbtPlugin("com.typesafe.sbt" % "sbt-site"                   % "1.3.2")
addSbtPlugin("io.github.jonas"  % "sbt-paradox-material-theme" % "0.6.0")
addSbtPlugin("io.spray"         % "sbt-revolver"               % "0.9.1")
addSbtPlugin("org.scala-js"     % "sbt-scalajs"                % "0.6.27")
addSbtPlugin("ch.epfl.scala"    % "sbt-web-scalajs-bundler"    % "0.14.0")
addSbtPlugin("ch.epfl.scala"    % "sbt-scalajs-bundler"        % "0.14.0")
addSbtPlugin("com.timushev.sbt" % "sbt-updates"                % "0.4.0")

addSbtCoursier
classpathTypes += "maven-plugin"


resolvers += Resolver.bintrayRepo("oyvindberg", "ScalablyTyped")
addSbtPlugin("org.scalablytyped" % "sbt-scalablytyped" % "201905150530")
