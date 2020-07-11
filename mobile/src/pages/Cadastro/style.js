import styled from "styled-components/native"
import MapView , {Marker} from 'react-native-maps';


export const Scroll = styled.ScrollView`
    width: 100%;
    flex: 1;
`

export const Main = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    padding: 15px 30px;
     background-color: #008577;
`

export const Imagem = styled.Image`
  
`

export const Input = styled.TextInput`
     background-color: white;
     border-radius: 10px;

     padding: 7px 10px;
     width: 100%;
     margin: 5px;

     elevation: 3;
     
     
`

export const Button = styled.TouchableOpacity`
    background-color: white;

    padding: 10px;
    margin: 5px;

    width: 100%;
    border-radius: 10px;
`

export const TextButton = styled.Text`
    color: #008577;

    text-align: center;
    font-family: "Roboto_700Bold";
    font-size: 15px;
`

export const Text = styled.Text`
    color: white;
    font-family: "Roboto_400Regular";
    font-size: 13px;
    margin-bottom: 8px;
    
`

export const ContentMap = styled.View`
    flex: 1;
    width: 100%;
    margin: 10px 0;
    border-radius: 15px;
    overflow: hidden;

    align-items: center;
`

export const Mapa = styled(MapView)`
width: 100%;
height: 100%;
min-width: 300px;
min-height: 300px;
    
    border-radius: 15px;

`

export const Pin = styled(Marker)`
    background-color: #008577;
`

export const TextMap = styled(Text)`
    font-size: 16px;
    margin: 8px 0 2px 0;
`
