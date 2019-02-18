package csw.aas.js.config
import csw.aas.js.config.pages.HomePage
import org.scalatest.selenium.Chrome
import org.scalatest.time.SpanSugar.convertFloatToGrainOfTime

class AasJsIntegrationTest extends BaseTestSuite with Chrome {
  implicitlyWait(10.seconds)

  override protected def afterAll(): Unit = {
    super.afterAll()
    quit()
  }

  test("should create config file through config admin UI") {
    val homePage = new HomePage
    go to homePage
    val loginPage       = homePage.clickOnLoginBtn()
    val configAdminPage = loginPage.login(Keycloak.configUser, Keycloak.configPassword)
    configAdminPage.createConfig("test", "Sample file content.")

    eventually(configAdminPage.outputText shouldBe Some("""{ "id" : "1" }"""))
  }
}
