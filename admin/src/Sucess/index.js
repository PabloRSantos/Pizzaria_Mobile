import React from "react"
import {Modal, Icon} from "./style"


const Alert = (props) => {

    return (
             <Modal show={props.show}>
                    <Icon/>
                     <p>Salvo com sucesso</p>
             </Modal>
    )
}
export default Alert
