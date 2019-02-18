package csw.aas.js.config

import Settings.CHROME_DRIVER_BINARY
import org.openqa.selenium.chrome.ChromeDriverService.CHROME_DRIVER_EXE_PROPERTY
import org.scalatest.concurrent.Eventually
import org.scalatest.time.SpanSugar.convertFloatToGrainOfTime
import org.scalatest.{BeforeAndAfterAll, FunSuiteLike, Matchers}

trait BaseTestSuite extends CswSetup with FunSuiteLike with BeforeAndAfterAll with Matchers with Eventually {

  System.setProperty(CHROME_DRIVER_EXE_PROPERTY, CHROME_DRIVER_BINARY)

  private val stopKeycloak = startAndRegisterKeycloak()._2
  startAndRegisterConfigServer()

  override implicit def patienceConfig: PatienceConfig = PatienceConfig(10.seconds, 100.millis)

  override protected def afterAll(): Unit = {
    stopKeycloak.stop()
    shutdown()
  }
}
