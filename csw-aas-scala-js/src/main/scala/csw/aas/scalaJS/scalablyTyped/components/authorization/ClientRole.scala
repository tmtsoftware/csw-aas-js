package csw.aas.scalaJS.scalablyTyped.components.authorization

import csw.aas.scalaJS.scalablyTyped.components.context.AuthContext
import typings.reactLib.dsl.define
import typings.reactLib.reactMod.{FC, ReactElement, ReactNode}

import scala.scalajs.js
import scala.scalajs.js.UndefOr

object ClientRole {
  trait ClientRoleProps extends js.Object {
    val clientRole: String
    val client: String
    val children: UndefOr[ReactElement[_]]
    val error: UndefOr[ReactElement[_]]
  }

  //Find out way
  /*val clientRole: FC[ClientRoleProps] = define.fc[ClientRoleProps]( clientRoleProps => {
    AuthContext.consumer(
      props => {
        clientRoleProps.error
        if (props.auth.isEmpty) clientRoleProps.error
        else {
          val auth = props.auth.get
          if (auth.isAuthenticated().get &&
            auth.hasResourceRole(clientRoleProps.clientRole, clientRoleProps.client)) {
            clientRoleProps.children.getOrElse(null)
          } else clientRoleProps.error.getOrElse(null)
        }
      }
    ).asInstanceOf[ReactNode].get
  }
  )*/
}
