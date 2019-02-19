package csw.aas.js.config

import org.scalatest.concurrent.Eventually
import org.scalatest.time.SpanSugar.convertFloatToGrainOfTime
import org.scalatest.{BeforeAndAfterAll, FunSuiteLike, Matchers}
import org.tmt.embedded_keycloak.impl.StopHandle

trait BaseTestSuite extends CswSetup with Chrome with FunSuiteLike with BeforeAndAfterAll with Matchers with Eventually {

  private var stopKeycloak: StopHandle = _

  override protected def beforeAll(): Unit = {
    stopKeycloak = startAndRegisterKeycloak()._2
    startAndRegisterConfigServer()
    implicitlyWait(10.seconds)
  }

  override protected def afterAll(): Unit = {
    stopKeycloak.stop()
    shutdown()
    quit()
  }

  override implicit def patienceConfig: PatienceConfig = PatienceConfig(10.seconds, 100.millis)
}
