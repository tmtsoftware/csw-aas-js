package csw.aas_js.context

import scala.annotation.meta.field
import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

@JSExportTopLevel("AuthContext")
object AuthContext {

  @(JSExport @field)
  val auth: String = ???

  @JSExport
  val login: () ⇒ Unit = ???

  @JSExport
  val logout: () ⇒ Unit = ???
}
