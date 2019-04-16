package csw.aas.scalaJS.scalablyTyped.components.context
import org.scalajs.dom.ext.Castable
import typings.reactLib.reactMod.{^, ComponentClass, ReactComponentElement}

object WithContext {
  def withContext(component: ReactComponentElement[Any, Seq[Any]]): ComponentClass[Seq[Any], Any] = {
    AuthContext
      .consumer(consumerProps => {
        import typings.reactLib.dsl._
        component
          .props(
            consumerProps.auth,
            consumerProps.login,
            consumerProps.logout
          )
          .cast[ReactComponentElement[Any, Seq[Any]]]
      })
      .cast[ComponentClass[Seq[Any], Any]]
  }
}
