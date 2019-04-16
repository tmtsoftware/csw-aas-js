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
  val login: Login = new Login()
  private val loginReactComponentElement: ReactComponentElement[Any, Seq[Any]] =
    login.asInstanceOf[ReactComponentElement[Any, Seq[Any]]]
  def withContextLogin: ComponentClass[Seq[Any], Any] = WithContext.withContext(loginReactComponentElement)
}
