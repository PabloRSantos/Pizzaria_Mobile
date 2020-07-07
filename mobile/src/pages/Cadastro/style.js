import styled from "styled-components/native"

export const Main = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    padding: 0 15px;
`

export const Imagem = styled.Image`

`

export const Input = styled.TextInput`
     background-color: white;
     border-radius: 10px;

     padding: 7px 10px;
     margin: 5px;
     width: 250px;

     elevation: 3;
     
     
`

export const Button = styled.TouchableOpacity`
    background-color: #008577;

    margin: 5px;
    padding: 10px;

    width: 250px;
    border-radius: 10px;
`

export const TextButton = styled.Text`
    color: white;

    text-align: center;
    font-family: "Roboto_700Bold";
    font-size: 15px;
`

export const Text = styled.Text`
    color: rgba(0, 0, 0, 0.5);
    font-family: "Roboto_400Regular";
    font-size: 13px;
    
`