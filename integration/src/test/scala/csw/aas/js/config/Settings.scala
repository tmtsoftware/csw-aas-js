package csw.aas.js.config

import com.typesafe.config.ConfigFactory

object Settings {

  private val config         = ConfigFactory.load()
  private val seleniumConfig = config.getConfig("selenium")

  val MODE: String                 = seleniumConfig.getString("mode")
  val CHROME_DRIVER_BINARY: String = seleniumConfig.getString("chromeDriverBinary")
}
