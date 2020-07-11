import React, {useState, useEffect} from "react"
import { useNavigation } from "@react-navigation/native"
import * as Location from "expo-location"


import {useAuth} from "../../contexts/auth"

import Modal from "../../components/Modal"

import {Main, Input, Button, TextButton, Text, Imagem, Mapa, ContentMap, TextMap, Pin, Scroll} from "./style"
import imagem from "../../../assets/logo.png"



const Cadastro = () => {

    const [nameUser, setNameUser] = useState("")
    const [senhaUser, setSenhaUser] = useState("")
    const [senha2User, setSenha2User] = useState("")
    const [celUser, setCelUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [modal, setModal] = useState(false)
    const [msgErro, setMsgErro] = useState("")
    const [initialPosition, setInitialPosition] = useState([0, 0])
    const [newPin, setNewPin] = useState([])

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
        form.latitude = newPin[0]
        form.longitude = newPin[1]

        const error = await SignUp(form)


        if(error) {
            setModal(false)
            setModal(true)
            setMsgErro(error)
        }

    }

    useEffect(() => {
        async function loadPosition(){
          const { status } = await Location.requestPermissionsAsync()
          
         if(status !== "granted"){
            Alert.alert("Ooops.., Precisamos de sua permissão para obter a localização")
            return
         }
  
         const location = await Location.getCurrentPositionAsync()
  
         const {latitude, longitude} = location.coords
  
         setInitialPosition([
           latitude,
           longitude
         ])
  
        }
  
        loadPosition()
  
      }, [])

      function createPin(e) {
          const {latitude, longitude} = e.nativeEvent.coordinate

          setNewPin([latitude, longitude])



      }

    return (
        <Scroll>
        <Main>


            <Modal visible={modal} txt={msgErro}/>

            <Imagem source={imagem}/>

        <Text onPress={NavigateToLogin}>Já tem uma conta? Clique aqui</Text>


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

            <Input
            placeholder="Telefone (com DDD)"
            autoCorrect={false}
            autoCapitalize="characters"
            secureTextEntry={true} 
            keyboardType="phone-pad"
            onChangeText={text => setCelUser(text)}
            />
       

            <TextMap>Seu Endereço:</TextMap>
            <ContentMap>
                <Mapa
                    onPress={e => createPin(e)}
                    initialRegion={{
                    latitude: initialPosition[0],
                    longitude: initialPosition[1],
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                    }}
                >
                     <Pin
                        coordinate={{latitude: -29.3276627, longitude: -49.7195745}}
                        title={"Manjeri"}
                        />


                    {newPin.length > 1 ? (
                         <Pin 
                         coordinate={{latitude: newPin[0], longitude: newPin[1]}}
                         title={"Sua localização"}
                     />
                    ): null}
                   
                </Mapa>
            </ContentMap>


            <Button onPress={submitForm}>
                <TextButton>Confirmar Cadastro</TextButton>
            </Button>
        

        
            

        </Main>
        </Scroll>
    )

}

export default Cadastro

