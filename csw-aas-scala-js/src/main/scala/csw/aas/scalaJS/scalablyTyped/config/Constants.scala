package csw.aas.scalaJS.scalablyTyped.config

object Constants {
  val AASConfig: Map[String, Any] = Map(
    "ssl-required"               -> "external",
    "verify-token-audience"      -> true,
    "use-resource-role-mappings" -> true
  )

  val Config: Map[String, String] = Map(
    "location-server-url" -> "http://localhost:7654",
    "AAS-server-name"     -> "AAS-service-http",
    "AAS-server-url"      -> "http://localhost:8081/auth"
  )
}
