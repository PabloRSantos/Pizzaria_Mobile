import React, {useState} from "react"
import { useNavigation } from "@react-navigation/native"

import {useAuth} from "../../contexts/auth"

import Modal from "../../components/Modal"

import {Main, Input, Button, TextButton, Text, Imagem} from "./style"
import imagem from "../../assets/logoVerde.png"



const Cadastro = () => {

    const [nameUser, setNameUser] = useState("")
    const [senhaUser, setSenhaUser] = useState("")
    const [senha2User, setSenha2User] = useState("")
    const [celUser, setCelUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [enderecoUser, setEnderecoUser] = useState("")
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    const [msgErro, setMsgErro] = useState("")

    const {SignUp} = useAuth()

    const navigation = useNavigation()

    function NavigateToLogin(){
        navigation.navigate("Login")
    }

    async function submitForm(){


        let form = {}

        form.nome = nameUser
        form.senha = senhaUser
        form.senha2 = senha2User
        form.celular = celUser
        form.email = emailUser
        form.endereco = enderecoUser

        const error = await SignUp(form)


        if(error) {
            setModal(false)
            setModal(true)
            setMsgErro(error)
        }

    }

    return (
        <Main>

            <Modal visible={modal} txt={msgErro}/>

            <Imagem source={imagem}/>

        {page === 1? (
        <>
            <Input
            placeholder="Nome de Usuário"
            autoCorrect={false}
            autoCapitalize="characters"
            onChangeText={text => setNameUser(text)}
            />

            <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="characters"
            onChangeText={text => setEmailUser(text)}
            />

            <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="characters"
            secureTextEntry={true}
            visible-password={false}
            onChangeText={text => setSenhaUser(text)}
            />

            <Input
            placeholder="Senha Novamente"
            autoCorrect={false}
            autoCapitalize="characters"
            secureTextEntry={true} 
            visible-password={false}
            onChangeText={text => setSenha2User(text)}
            />

            <Button onPress={() => setPage(2)}>
                <TextButton>Continuar</TextButton>
            </Button>

            <Text onPress={NavigateToLogin}>Já tem uma conta? Clique aqui</Text>
        </>
        ) : (
        
        <>

            <Input
            placeholder="Telefone (com DDD)"
            autoCorrect={false}
            autoCapitalize="characters"
            secureTextEntry={true} 
            keyboardType="phone-pad"
            onChangeText={text => setCelUser(text)}
            />

            <Input
            placeholder="Endereço"
            autoCorrect={false}
            autoCapitalize="characters"
            onChangeText={text => setEnderecoUser(text)}
            />


            <Button onPress={submitForm}>
                <TextButton>Confirmar Cadastro</TextButton>
            </Button>
        </>

        )}
            

        </Main>
    )

}

export default Cadastro
