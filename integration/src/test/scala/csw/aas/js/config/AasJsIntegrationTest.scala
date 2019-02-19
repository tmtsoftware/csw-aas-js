package csw.aas.js.config
import csw.aas.js.config.pages.HomePage

class AasJsIntegrationTest extends BaseTestSuite {

  test("should create config file through config admin UI") {
    val homePage = new HomePage
    go to homePage
    val configAdminPage = homePage
      .clickOnLoginBtn()
      .login(Keycloak.configUser, Keycloak.configPassword)
      .createConfig("test", "Sample file content.")

    eventually(configAdminPage.outputText shouldBe Some("""{ "id" : "1" }"""))
  }
}
