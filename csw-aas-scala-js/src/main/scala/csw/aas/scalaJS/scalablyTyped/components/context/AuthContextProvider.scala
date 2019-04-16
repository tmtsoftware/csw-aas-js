package csw.aas.scalaJS.scalablyTyped.components.context
import org.scalajs.dom.ext.Castable
import typings.reactLib.reactMod.{Component, ProviderProps, ReactElement, ReactNode}

import scala.scalajs.js
import scala.scalajs.js.|

case class Props(config: js.Object, children: ReactNode)
case class State(authContextState: AuthContextState)

class AuthContextProvider extends Component[Props, State, js.Any] {

  override def render(): ReactNode = {
    val value: ReactElement[_] | Null = AuthContext.provider(
      ProviderProps(
        value = state.authContextState,
        children = props.children.get
      )
    )
    value.cast[ReactNode]
  }

  def instantiateAAS(url: String, redirect: Boolean): Unit = {}
}
