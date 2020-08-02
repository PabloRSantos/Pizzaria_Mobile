import React, {useEffect, useState} from "react"


import api from "../../services/api"
import {useAuth} from "../../contexts/auth"
import Footer from "../../components/Footer"

import {Main, ProfilePic, Button, TextButton, ContentImg, ContentInfos, Text, Mapa, Pin, ContentTexts} from "./style"

const Profile = () => {

    const [userDados, setUserDados] = useState({active: false})
    const {SignOut} = useAuth()
    

    useEffect(() => {
        api.get("/user")
        .then(response => {
            response.data.user.latitude = parseFloat(response.data.user.latitude)
            response.data.user.longitude = parseFloat(response.data.user.longitude)

            setUserDados(response.data.user)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <>
        <Main>
           
      
            <ContentInfos>
            <ProfilePic resizeMode="cover" source={{uri: `https://manjeri-backend.herokuapp.com/uploads/user/default.jpg`}}/>
                <ContentTexts>
                    <Text>Nome: {userDados.nome}</Text>
                    <Text>Email: {userDados.email}</Text>
                    <Text>Celular: {userDados.celular}</Text>
                </ContentTexts>

            {userDados.nome && (
                <Mapa
                initialRegion={{
                latitude:  userDados.latitude,
                longitude: userDados.longitude,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014
                }}
            >
                 <Pin
                    coordinate={{latitude: -29.3276627, longitude: -49.7195745}}
                    title={"Manjeri"}
                    />

                     <Pin 
                     coordinate={{
                         latitude: userDados.latitude,
                         longitude: userDados.longitude}}
                     title={"Sua localização"} />
            
               
                </Mapa>
            )}
            </ContentInfos>
            

            <Button onPress={() => SignOut()}> 
                <TextButton onPress={() => SignOut()}>Sair</TextButton>
            </Button>

            
        </Main>

        <Footer />
        </>
    )
}

export default Profile