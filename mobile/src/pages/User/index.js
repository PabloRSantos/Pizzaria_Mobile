import React, {useEffect, useState} from "react"
import AsyncStorage from '@react-native-community/async-storage';


import api from "../../services/api"
import {useAuth} from "../../contexts/auth"
import Footer from "../../components/Footer"

import {Main, ProfilePic, Button, TextButton, ContentImg, ContentInfos, Text, Mapa, Pin, Scroll} from "./style"

const Profile = () => {

    const [userDados, setUserDados] = useState({})
    const {SignOut} = useAuth()
    
    
    useEffect(() => {
        async function afs(){
            const a = await AsyncStorage.getItem("manjeriId")

            console.log(a)
        }

        afs()

    }, [])
  

    useEffect(() => {
        api.get("/user")
        .then(response => {
            setUserDados(response.data.user)
            console.log(response.data.user)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <>
        <Main>

            <ContentImg>
                <ProfilePic resizeMode="cover" source={{uri: `https://manjeri-backend.herokuapp.com//uploads/user/default.jpg`}}/>
            </ContentImg>

            <Scroll>
            <ContentInfos>
                <Text>Nome: {userDados.nome}</Text>
                <Text>Email: {userDados.email}</Text>
                <Text>Celular: {userDados.celular}</Text>
                <Mapa
                    onPress={e => createPin(e)}
                    initialRegion={{
                    latitude: parseFloat(userDados.latitude),
                    longitude: parseFloat(userDados.longitude),
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
                             latitude: parseFloat(userDados.latitude),
                             longitude: parseFloat(userDados.longitude)}}
                         title={"Sua localização"} />
                
                   
                </Mapa>
            </ContentInfos>
            </Scroll>

            <Button onPress={() => SignOut()}> 
                <TextButton onPress={() => SignOut()}>Sair</TextButton>
            </Button>

            
        </Main>

        <Footer />
        </>
    )
}

export default Profile