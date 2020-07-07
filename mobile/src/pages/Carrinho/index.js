import React from "react"
import { useNavigation } from "@react-navigation/native"

import IconFeather from "react-native-vector-icons/Feather"

import Products from "../../components/Products"
import Footer from "../../components/Footer"

import {Content, Back, Main, Button, PrecoTotal, TextButton, ContentBottom} from "./style"

const Carrinho = () => {

    const navigation = useNavigation()

    function NavigateToBack(){
        navigation.goBack()
    }

    return(
        <Main>  

        <Content>
            <Back onPress={NavigateToBack}>
                <IconFeather onPress={NavigateToBack} name="arrow-left" size={30} color={"#008577"} />
            </Back>
    
            <Products page="carrinho" url="/carrinho"/>

        

            <ContentBottom>
                <PrecoTotal>
                    Total: R$100,00
                </PrecoTotal>

                <Button>
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