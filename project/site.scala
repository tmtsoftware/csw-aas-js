import sbt.Keys._
import sbt._

object ParadoxSite extends AutoPlugin {
  import com.typesafe.sbt.site.paradox.ParadoxSitePlugin
  import ParadoxSitePlugin.autoImport._
  import _root_.io.github.jonas.paradox.material.theme.ParadoxMaterialThemePlugin
  import ParadoxMaterialThemePlugin.autoImport._
  import com.lightbend.paradox.sbt.ParadoxPlugin.autoImport._

  override def requires: Plugins = ParadoxSitePlugin && ParadoxMaterialThemePlugin

  override def projectSettings: Seq[Setting[_]] =
    ParadoxMaterialThemePlugin.paradoxMaterialThemeSettings(Paradox) ++
    Seq(
      sourceDirectory in Paradox := baseDirectory.value / "src" / "main",
      sourceDirectory in (Paradox, paradoxTheme) := (sourceDirectory in Paradox).value / "_template",
      paradoxMaterialTheme in Paradox ~= {
        _.withFavicon("assets/tmt_favicon.ico")
          .withRepository(new URI("https://github.com/tmtsoftware/csw"))
      },
      paradoxProperties in Paradox ++= Map(
        "version"                → version.value,
        "scala.binaryVersion"    → scalaBinaryVersion.value,
        "scaladoc.base_url"      → s"https://tmtsoftware.github.io/csw/${version.value}/api/scala",
        "javadoc.base_url"       → s"https://tmtsoftware.github.io/csw/${version.value}/api/java",
        "extref.manual.base_url" → s"https://tmtsoftware.github.io/csw/${version.value}/manual/index.html",
        "github.base_url"        → githubBaseUrl(version.value)
      )
    )

  private def githubBaseUrl(version: String) = {
    val baseRepoUrl = "https://github.com/tmtsoftware/csw/tree"
    if (version == "0.1-SNAPSHOT") s"$baseRepoUrl/master"
    else s"$baseRepoUrl/v$version"
  }
}
