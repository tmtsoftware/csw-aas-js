import java.nio.file.Files
import java.nio.file.StandardCopyOption.REPLACE_EXISTING

lazy val aggregatedProjects: Seq[ProjectReference] = Seq(
  `csw-aas-react4s-facade`,
  `csw-aas-react4s-example`,
  `integration`,
  `docs`
)

/* ================= Root Project ============== */
lazy val `csw-js` = project
  .in(file("."))
  .aggregate(aggregatedProjects: _*)

/* ================= Paradox Docs ============== */
lazy val docs = project.enablePlugins(ParadoxSite, GithubPublishDocs)

lazy val `csw-aas-sjs` = project
  .enablePlugins(ScalaJSBundlerPlugin)
  .settings(
    fork := false,
    scalacOptions += "-P:scalajs:sjsDefinedByDefault",
    resolvers += Resolver.bintrayRepo("oyvindberg", "ScalablyTyped"),
    resolvers += Resolver.sonatypeRepo("snapshots"),
    libraryDependencies ++= Dependencies.AASSjs.value,
    npmDependencies in Compile ++= Dependencies.AASSjsNpmDeps
  )

lazy val `csw-aas-react4s-facade` = project
  .in(file("csw-aas-react4s-facade"))
  .enablePlugins(ScalaJSBundlerPlugin)
  .settings(
    fork := false,
    scalacOptions += "-P:scalajs:sjsDefinedByDefault",
    resolvers += Resolver.sonatypeRepo("snapshots"),
    libraryDependencies ++= Dependencies.AASReact4s.value,
    npmDependencies in Compile ++= Dependencies.AASReact4sNpmDeps
  )

lazy val `csw-aas-react4s-example` = project
  .in(file("csw-aas-react4s-example"))
  .enablePlugins(ScalaJSBundlerPlugin)
  .dependsOn(`csw-aas-react4s-facade`)
  .settings(
    scalaJSUseMainModuleInitializer := true,
    fork := false,
    scalacOptions += "-P:scalajs:sjsDefinedByDefault",
    resolvers += Resolver.sonatypeRepo("snapshots"),
    libraryDependencies ++= Dependencies.AASReact4s.value,
    npmDependencies in Compile ++= Dependencies.AASReact4sNpmDeps,
    npmDevDependencies in Compile ++= Dependencies.AASReact4sNpmDevDeps,
    version in webpack := "4.28.4",
    version in startWebpackDevServer := "3.1.14",
    webpackConfigFile := Some(baseDirectory.value / "aas.webpack.config.js"),
    webpackResources := webpackResources.value +++ PathFinder(Seq(baseDirectory.value / "index.html")) ** "*.*",
    webpackDevServerExtraArgs in fastOptJS ++= Seq(
      "--content-base",
      baseDirectory.value.getAbsolutePath
    )
  )

lazy val `integration` = project
  .in(file("integration"))
  .settings(
    libraryDependencies ++= Dependencies.Integration.value
  )
