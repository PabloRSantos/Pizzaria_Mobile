import styled from "styled-components/native"
import {getStatusBarHeight} from "react-native-status-bar-height"
import IconAwesome from 'react-native-vector-icons/FontAwesome';


export const Main = styled.View`

flex: 1;
align-items: center;
`

export const Content = styled.View`

    padding: ${getStatusBarHeight() + 10 + `px`} 16px 16px;
 
    background-color: #008577;
    flex-direction: row;


    justify-content: space-between;
    align-items: center;
`

export const Input = styled.TextInput`

background-color: white;
border-radius: 15px;
color: black;
flex: 1;
padding: 2px 10px 2px;

`

export const Whats = styled(IconAwesome).attrs({
    name: "whatsapp",
    size: 30,
    color: "white"
})`

    margin-left: 12px;

`


export const Scroll = styled.ScrollView`

flex: 5.5;
`