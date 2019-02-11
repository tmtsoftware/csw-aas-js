import java.io.File

import sbt.Keys._
import sbt._

object GithubPublishDocs extends AutoPlugin {
  import com.typesafe.sbt.SbtGit.GitKeys
  import com.typesafe.sbt.sbtghpages.GhpagesPlugin
  import GhpagesPlugin.autoImport._

  override def requires: Plugins = GhpagesPlugin

  override def projectSettings: Seq[Setting[_]] = Seq(
    ghpagesBranch := "master",
    includeFilter in ghpagesCleanSite := new FileFilter {
      override def accept(pathname: File): Boolean = pathname.getAbsolutePath.contains(s"csw-js/${version.value}")
    },
    GitKeys.gitRemoteRepo := "git@github.com:kpritam/kpritam.github.io.git" //todo: point to tmtsoftware
  )
}
