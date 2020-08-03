import React, {useState} from "react"
import { useNavigation } from "@react-navigation/native"

import IconFeather from "react-native-vector-icons/Feather"

import Products from "../../components/Products"
import Footer from "../../components/Footer"
import Modal from "../../components/Modal"
import api from "../../services/api"


import {Content, Back, Main, Button, PrecoTotal, TextButton, ContentBottom} from "./style"

const Carrinho = () => {

    const navigation = useNavigation()
    const [buy, setBuy] = useState(false)
    const [modal, setModal] = useState(false)
    const [msgModal, setMsgModal] = useState("")

    function NavigateToBack(){
        navigation.goBack()
    }


    async function sendProducts(){
       
        const {data} = await api.post("/pedido")

        setMsgModal(data.message || data.error)

        setModal(false)

        setTimeout(() => setModal(true), 200)

        if(data.message)
        buy === true ? setBuy(false) : setBuy(true)
 
     }

    return(
        <Main>  

        <Modal visible={modal} txt={msgModal}/>


        <Content>
            <Back onPress={NavigateToBack}>
                <IconFeather onPress={NavigateToBack} name="arrow-left" size={30} color={"#008577"} />
            </Back>
    
            <Products buyCondition={buy} page="carrinho" url="/carrinho" titulo={`Carrinho`}/>

        

            <ContentBottom>
                <PrecoTotal>
                    Total: R$100,00
                </PrecoTotal>

                <Button onPress={sendProducts}>
                    <TextButton>
                        Finalizar Compra
                    </TextButton>
                </Button>
            </ContentBottom>

        </Content>

        <Footer />

        </Main>
    )
}

export default Carrinho