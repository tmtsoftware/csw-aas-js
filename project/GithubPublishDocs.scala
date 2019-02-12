import java.io.File
import sbt.Keys._
import sbt._
import com.typesafe.sbt.SbtGit.GitKeys
import com.typesafe.sbt.sbtghpages.GhpagesPlugin
import GhpagesPlugin.autoImport._
import ParadoxSite._

object GithubPublishDocs extends AutoPlugin {

  override def requires: Plugins = GhpagesPlugin

  override def projectSettings: Seq[Setting[_]] = Seq(
    ghpagesBranch := "master",
    includeFilter in ghpagesCleanSite := new FileFilter {
      override def accept(pathname: File): Boolean = pathname.getAbsolutePath.contains(s"$docsParentDir/${version.value}")
    },
    GitKeys.gitRemoteRepo := "git@github.com:tmtsoftware/tmtsoftware.github.io.git"
  )
}
