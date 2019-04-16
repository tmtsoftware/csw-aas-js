package csw.aas.scalaJS.scalablyTyped.components
import csw.aas.scalaJS.scalablyTyped.components.context.WithContext
import typings.reactLib.reactMod.{Component, ReactNode, _}

import scala.scalajs.js

class Props(val login: () => Boolean) extends js.Object

class Login extends Component[Props, js.Any, js.Any] {

  import typings.reactLib.dsl._

  override def render(): ReactNode = button.props(
    ButtonHTMLAttributes(
      HTMLAttributes(
        id = "aas-login",
        onClick = _ => props.login
      ),
      value = "Login"
    )
  )
}

object Login {
  val login: Login                             = new Login()
  def withContextLogin: ReactElement[Seq[Any]] = WithContext.withContext(login.asInstanceOf[ReactElement[Seq[Any]]])
}
