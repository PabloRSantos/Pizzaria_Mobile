import React, {useEffect, useState} from "react"

import api from "../../services/api"
import {useAuth} from "../../contexts/auth"
import Footer from "../../components/Footer"

import {Main, ProfilePic, Button, TextButton, ContentImg, ContentText, Text} from "./style"

const Profile = () => {

    const [userDados, setUserDados] = useState({})
    const {SignOut} = useAuth()


    useEffect(() => {
        api.get("/user")
        .then(response => {
            console.log(response.data)
            setUserDados(response.data.user)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <>
        <Main>

            <ContentImg>
                <ProfilePic resizeMode="cover" source={{uri: `https://manjeri-backend.herokuapp.com//uploads/user/default.jpg`}}/>
            </ContentImg>


            <ContentText>
                <Text>Nome: {userDados.nome}</Text>
                <Text>Email: {userDados.email}</Text>
                <Text>Celular: {userDados.celular}</Text>
                <Text>Endereço: {userDados.endereco}</Text>
            </ContentText>

            <Button onPress={() => SignOut()}> 
                <TextButton onPress={() => SignOut()}>Sair</TextButton>
            </Button>

            
        </Main>

        <Footer />
        </>
    )
}

export default Profile