package csw.aas.js.config

import java.nio.file.Paths

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import csw.aas.core.deployment.AuthServiceLocation
import csw.config.server.{ServerWiring ⇒ ConfigServerWiring}
import Utils.{await, coordShutdown, terminateHttpServerBinding}
import csw.location.server.internal.{ServerWiring ⇒ LocationServerWiring}
import org.tmt.embedded_keycloak.impl.StopHandle
import org.tmt.embedded_keycloak.{EmbeddedKeycloak, Settings ⇒ KeycloakSettings}

trait CswSetup {

  private val locationWiring        = new LocationServerWiring
  private val locationServerBinding = await(locationWiring.locationHttpService.start())

  import locationWiring._
  import actorRuntime._
  implicit val system: ActorSystem = locationWiring.actorSystem

  lazy val configWiring: ConfigServerWiring = new ConfigServerWiring {
    override lazy val actorSystem: ActorSystem = system
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
    await(Http(system).shutdownAllConnectionPools())
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
