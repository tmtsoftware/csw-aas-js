package csw.aas.js.config.pages

import org.openqa.selenium.WebDriver
import org.scalatest.selenium.WebBrowser

class ConfigAdminPage(implicit driver: WebDriver) extends WebBrowser {

  private val filePathTxt        = id("file-path-txt-area")
  private val fileContentTxt     = id("file-content-txt-area")
  private val createConfigBtn    = id("create-config-btn")
  private val createConfigOutput = id("create-config-output")

  def createConfig(filePath: String, fileContent: String): ConfigAdminPage = {
    textArea(filePathTxt).value = filePath
    textArea(fileContentTxt).value = fileContent
    click on createConfigBtn
    this
  }

  def outputText: Option[String] = find(createConfigOutput).map(_.text)

}
