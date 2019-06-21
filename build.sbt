import ohnosequences.sbt.GithubRelease.keys.ghreleaseAssets
import ohnosequences.sbt.SbtGithubReleasePlugin

lazy val aggregatedProjects: Seq[ProjectReference] = Seq(
  `integration`,
  `docs`
)

/* ================= Root Project ============== */
lazy val `csw-js` = project
  .in(file("."))
  .enablePlugins(SbtGithubReleasePlugin)
  .settings(
    ghreleaseAssets := Seq()
  )
  .aggregate(aggregatedProjects: _*)

/* ================= Paradox Docs ============== */
lazy val docs = project.enablePlugins(ParadoxSite, GithubPublishDocs)

lazy val `integration` = project
  .in(file("integration"))
  .settings(
    libraryDependencies ++= Dependencies.Integration.value
  )
