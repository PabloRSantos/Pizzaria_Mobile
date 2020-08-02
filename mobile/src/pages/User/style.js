import styled from "styled-components/native"
import {getStatusBarHeight} from "react-native-status-bar-height"
import MapView , {Marker} from 'react-native-maps';

export const Main = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 10 + `px`} 16px 20px 16px;
    align-items: center;
    justify-content: space-between;
`

export const ContentTexts = styled.View`

    
`

export const ProfilePic = styled.Image`
   width: 75px;
   height: 75px;
   border-radius: ${100/2 + "px"};
   margin: 0 auto 5px;
`

export const ContentInfos = styled.View`

    padding: 0 16px;
    width: 100%;
    margin: 0 0 12px;
    border-radius: 12px;

    flex: 2;
    display: flex;
    flex-direction:column;
    justify-content: center;

    elevation: 4;
    background-color: white;


`

export const Text = styled.Text`
    font-family: "Roboto-Medium";
    font-size: 14px;
    margin: 5px 0;
`

export const Button = styled.TouchableOpacity`
     background-color: #008577;
     width: 100%;
     padding: 10px 0;
     border-radius: 12px;
`

export const TextButton = styled.Text`
     color: white;
    font-family: "Roboto-Medium";
    text-align: center;
    font-size: 18px;
`


export const Mapa = styled(MapView)`
width: 100%;
height: 50%;
margin-top: 5px;
    
    border-radius: 15px;

`

export const Pin = styled(Marker)`
    background-color: #008577;
`