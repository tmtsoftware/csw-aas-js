import _root_.io.github.jonas.paradox.material.theme.ParadoxMaterialThemePlugin
import com.lightbend.paradox.sbt.ParadoxPlugin.autoImport._
import com.typesafe.sbt.site.SitePlugin.autoImport._
import com.typesafe.sbt.site.paradox.ParadoxSitePlugin
import com.typesafe.sbt.site.paradox.ParadoxSitePlugin.autoImport._
import io.github.jonas.paradox.material.theme.ParadoxMaterialThemePlugin.autoImport._
import sbt.Keys._
import sbt._

object ParadoxSite extends AutoPlugin {

  val docsParentDir = "csw-js"

  override def requires: Plugins = ParadoxSitePlugin && ParadoxMaterialThemePlugin

  override def projectSettings: Seq[Setting[_]] =
    ParadoxMaterialThemePlugin.paradoxMaterialThemeSettings(Paradox) ++
    Seq(
      sourceDirectory in Paradox := baseDirectory.value / "src" / "main",
      sourceDirectory in (Paradox, paradoxTheme) := (sourceDirectory in Paradox).value / "_template",
      paradoxMaterialTheme in Paradox ~= {
        _.withFavicon("assets/tmt_favicon.ico")
          .withRepository(new URI("https://github.com/tmtsoftware/csw-js"))
      },
      paradoxProperties in Paradox ++= Map(
        "version"             → version.value,
        "scala.binaryVersion" → scalaBinaryVersion.value,
        "github.base_url"     → githubBaseUrl(version.value),
        "extref.csw.base_url" → s"https://tmtsoftware.github.io/csw/$cswVersion/%s"
      ),
      (mappings in makeSite) := {
        val cswVersion   = version.value
        val siteMappings = (mappings in makeSite).value

        // copy all artifacts inside `js` directory
        val siteMappingsWithoutVersion = siteMappings.map { case (file, output) => (file, s"/$docsParentDir/" + output) }
        val siteMappingsWithVersion = siteMappings.map {
          case (file, output) => (file, s"/$docsParentDir/" + cswVersion + output)
        }

        // keep documentation for SNAPSHOT versions in SNAPSHOT directory. (Don't copy SNAPSHOT docs to top level)
        // If not SNAPSHOT version, then copy latest version of documentation to top level as well as inside corresponding version directory
        if (cswVersion.endsWith("-SNAPSHOT")) siteMappingsWithVersion
        else siteMappingsWithoutVersion ++ siteMappingsWithVersion
      }
    )

  // export CSW_VERSION env variable which is compatible with csw
  // this represents version number of javascript docs maintained at https://github.com/tmtsoftware/csw-js
  private def cswVersion: String = (sys.env ++ sys.props).get("CSW_VERSION") match {
    case Some(v) ⇒ v
    case None    ⇒ "0.1-SNAPSHOT"
  }

  private def githubBaseUrl(version: String) = {
    val baseRepoUrl = "https://github.com/tmtsoftware/csw-js/tree"
    if (version == "0.1-SNAPSHOT") s"$baseRepoUrl/master"
    else s"$baseRepoUrl/v$version"
  }

}
