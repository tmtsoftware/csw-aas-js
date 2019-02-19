package csw.aas.js.config

import java.nio.file.Paths

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.stream.Materializer
import csw.aas.core.deployment.AuthServiceLocation
import csw.aas.js.config.Utils.{await, coordShutdown, terminateHttpServerBinding}
import csw.config.server.{ServerWiring ⇒ ConfigServerWiring}
import csw.location.server.internal.{ServerWiring ⇒ LocationServerWiring}
import org.tmt.embedded_keycloak.impl.StopHandle
import org.tmt.embedded_keycloak.{EmbeddedKeycloak, Settings ⇒ KeycloakSettings}

import scala.concurrent.ExecutionContext

trait CswSetup {

  private val locationWiring        = new LocationServerWiring
  private val locationServerBinding = await(locationWiring.locationHttpService.start())

  import locationWiring._
  import actorRuntime._
  implicit val _system: ActorSystem  = locationWiring.actorSystem
  implicit val _ec: ExecutionContext = ec
  implicit val _mat: Materializer    = mat

  lazy val configWiring: ConfigServerWiring = new ConfigServerWiring {
    override lazy val actorSystem: ActorSystem = _system
  }

  private var configServer: Option[Http.ServerBinding] = None

  def startAndRegisterKeycloak(): (EmbeddedKeycloak, StopHandle) = {
    val (keycloak, stopKeycloak) = Keycloak.start()
    await(new AuthServiceLocation(locationService).register(KeycloakSettings.default.port))
    (keycloak, stopKeycloak)
  }

  def startAndRegisterConfigServer(): Unit = {
    val (server, _) = await(configWiring.httpService.registeredLazyBinding)
    configServer = Some(server)
    deleteServerFiles()
    configWiring.svnRepo.initSvnRepo()
  }

  def shutdown(): Unit = {
    deleteServerFiles()
    await(Http(_system).shutdownAllConnectionPools())
    configServer.foreach(terminateHttpServerBinding)
    terminateHttpServerBinding(locationServerBinding)
    coordShutdown(actorRuntime.shutdown)
  }

  private def deleteServerFiles(): Unit = {
    val annexFileDir = Paths.get(configWiring.settings.`annex-files-dir`).toFile
    Utils.deleteDirectoryRecursively(annexFileDir)
    Utils.deleteDirectoryRecursively(configWiring.settings.repositoryFile)
  }

}
