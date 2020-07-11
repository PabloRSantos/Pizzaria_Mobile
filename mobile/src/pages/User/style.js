import styled from "styled-components/native"
import {getStatusBarHeight} from "react-native-status-bar-height"
import MapView , {Marker} from 'react-native-maps';

export const Main = styled.View`
    flex: 1;
    padding: ${getStatusBarHeight() + 20 + `px`} 16px 20px 16px;
    align-items: center;
    justify-content: space-between;
`

export const ContentImg = styled.View`
     width: 100px;
    height: 100px;
    border-radius: ${100/2 + "px"};
`

export const ProfilePic = styled.Image`
   width: 100%;
   height: 100%;
   border-radius: ${100/2 + "px"};
`

export const Scroll = styled.ScrollView`
    width: 100%;
    flex: 2;
    background-color: red;
    margin: 24px 0;
    elevation: 14;
    border-radius: 5px;
`

export const ContentInfos = styled.View`
    background-color: white;

    padding: 16px;
    width: 100%;
    height: 100%;

    flex: 1;
    justify-content: space-between;

    border-radius: 5px;

`

export const Text = styled.Text`
    font-family: "Roboto_500Medium";
    font-size: 14px;
    margin: 5px 0;
`

export const Button = styled.TouchableOpacity`
     background-color: #008577;
     width: 100%;
     padding: 10px 0;
`

export const TextButton = styled.Text`
     color: white;
    font-family: "Roboto_500Medium";
    text-align: center;
    font-size: 18px;
`


export const Mapa = styled(MapView)`
width: 100%;
min-height: 200px;
margin-top: 5px;
    
    border-radius: 15px;

`

export const Pin = styled(Marker)`
    background-color: #008577;
`