import React, {useState} from "react"
import { useNavigation } from "@react-navigation/native"
import {useAuth} from "../../contexts/auth"


import {Main, Input, Button, TextButton, Text, Imagem} from "./style"

import imagem from "../../../assets/logo.png"
import Modal from "../../components/Modal"

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [modal, setModal] = useState(false)
    const [msgErro, setMsgErro] = useState("")

    const {SignIn} = useAuth()

    const navigation = useNavigation()

    async function submitForm(){

        let form = {}
        form.email = email
        form.senha = senha

        const error = await SignIn(form)


        if(error) {
            setModal(false)
            setModal(true)
            setMsgErro(error)
        }
    }

    function navigateToCadastro(){
        navigation.navigate("Cadastro")
    }

    return(

            <Main>

                <Modal visible={modal} txt={msgErro}/>
                   

                <Imagem source={imagem}/>

                <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="characters"
                onChangeText={text => setEmail(text)}
                />

                <Input
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="characters"
                secureTextEntry={true} 
                onChangeText={text => setSenha(text)}
                />

                <Button onPress={submitForm}>
                    <TextButton onPress={submitForm}>Fazer Login</TextButton>
                </Button>

                <Text onPress={navigateToCadastro}>Registrar-se</Text>

            </Main>

    )

}

export default Login
