import styled from "styled-components/native"
import {getStatusBarHeight} from "react-native-status-bar-height"


export const Main = styled.View`


flex: 1;
align-items: center;
`

export const Content = styled.View`

    padding: ${getStatusBarHeight() + 20 + `px`} 16px 20px 16px;
 
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

export const Pesquisa = styled.View`
    margin-left: 15px;
    height: 10px;
    justify-content: center;
`

export const Scroll = styled.ScrollView`

flex: 5.5;
`