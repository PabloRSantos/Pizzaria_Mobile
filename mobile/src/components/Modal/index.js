
import React, {useState, useEffect} from "react"

import Modal from 'react-native-modal';

import {BodyModal, ButtonModal, TextModal, TextButton} from "./style"

const MyModal = ({visible, txt}) => {
    const [visibility, setVisibility] = useState()

   useEffect(() => {
       setVisibility(visible)
   }, [visible])

    return (
        <Modal isVisible={visibility}
        onBackdropPress={() => setVisibility(false)}
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"}}>

        <BodyModal >
            <TextModal>{txt}</TextModal>

            <ButtonModal onPress={() => setVisibility(false)}>
                <TextButton onPress={() => setVisibility(false)}>Continuar</TextButton>
            </ButtonModal>
        </BodyModal>

        </Modal>
    )

}

export default MyModal