package csw.aas.js.config

import csw.aas.js.config.Utils.await
import org.scalatest.concurrent.Eventually
import org.scalatest.time.SpanSugar.convertFloatToGrainOfTime
import org.scalatest.BeforeAndAfterAll
import org.tmt.embedded_keycloak.impl.StopHandle
import org.scalatest.funsuite.AnyFunSuiteLike
import org.scalatest.matchers.should.Matchers

trait BaseTestSuite
    extends JsConfigServer
    with CswSetup
    with Chrome
    with AnyFunSuiteLike
    with BeforeAndAfterAll
    with Matchers
    with Eventually {

  private var stopKeycloak: StopHandle = _

  override protected def beforeAll(): Unit = {
    if (!await(startNodeConfigServer())) throw new RuntimeException("failed to start js config server")
    stopKeycloak = startAndRegisterKeycloak()._2
    startAndRegisterConfigServer()
    implicitlyWait(10.seconds)
  }

  override protected def afterAll(): Unit = {
    stopNodeConfigServer()
    stopKeycloak.stop()
    shutdown()
    quit()
  }

  override implicit def patienceConfig: PatienceConfig = PatienceConfig(10.seconds, 100.millis)
}
