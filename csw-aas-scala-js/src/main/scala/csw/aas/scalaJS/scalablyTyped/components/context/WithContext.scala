package csw.aas.scalaJS.scalablyTyped.components.context
import typings.reactLib.reactMod.ReactElement

object WithContext {
  def withContext(component: ReactElement[Seq[Any]]): ReactElement[Seq[Any]] = {
    ???
    //Find out way
    /*AuthContext.consumer(consumerProps => {
      import typings.reactLib.dsl._
      div.noprops() // use componet and add additional props from consumer props
    }).cast[ReactElement[Seq[Any]]]*/
  }
}
