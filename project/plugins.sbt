addSbtPlugin("com.geirsson"     % "sbt-scalafmt"               % "1.5.1")
addSbtPlugin("com.dwijnand"     % "sbt-dynver"                 % "3.1.0")
addSbtPlugin("io.spray"         % "sbt-revolver"               % "0.9.1")
addSbtPlugin("org.scala-js"     % "sbt-scalajs"                % "0.6.27")
addSbtPlugin("ch.epfl.scala"    % "sbt-web-scalajs-bundler"    % "0.14.0")
addSbtPlugin("ch.epfl.scala"    % "sbt-scalajs-bundler"        % "0.14.0")
addSbtPlugin("com.timushev.sbt" % "sbt-updates"                % "0.4.0")

addSbtPlugin("ohnosequences" % "sbt-github-release" % "0.7.0")

libraryDependencies += "com.sun.activation"   % "javax.activation" % "1.2.0"

resolvers += Resolver.bintrayRepo("twtmt", "sbt-plugins")
addSbtPlugin("com.github.tmtsoftware" % "sbt-docs" % "0.1.2")

addSbtCoursier
classpathTypes += "maven-plugin"
