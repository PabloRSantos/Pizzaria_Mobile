import React from "react"

import {useAuth} from "../../contexts/auth"

import IconAwesome from 'react-native-vector-icons/FontAwesome';
import IconFeather from 'react-native-vector-icons/Feather';

import { useNavigation } from "@react-navigation/native"

import {Content, Button} from "./style"

const Footer = () => {

    const navigation = useNavigation()
    const {SignOut} = useAuth()

    function NavigateToCar(){
        navigation.navigate("Carrinho")
    }

    function NavigateToHome(){
        navigation.navigate("Home")
    }

    function NavigateToUser(){
        navigation.navigate("User")
    }

    return (
        <Content>
            
            <Button onPress={NavigateToHome}>   
                 <IconAwesome onPress={NavigateToHome} name="home" size={30} color="white"/>
            </Button>


            <Button onPress={NavigateToCar}>
                <IconAwesome onPress={NavigateToCar} name="shopping-cart" size={30} color="white" />
            </Button>

            <Button onPress={NavigateToUser}>  
                <IconFeather onPress={NavigateToUser} name="user" size={30} color="white" />
            </Button>


        </Content>
    )
}

export default Footer