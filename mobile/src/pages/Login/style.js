import styled from "styled-components/native"

export const Main = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #008577;
    padding: 0 30px;
`



export const Imagem = styled.Image`
    margin-bottom: 20px;
`

export const Input = styled.TextInput`
     background-color: white;
     border-radius: 10px;

     padding: 7px 10px;
     margin: 5px;
     width: 100%;

     elevation: 3;
     
     
`

export const Button = styled.TouchableOpacity`
    background-color: white;

    margin: 5px;
    padding: 10px;

    width: 100%;
    border-radius: 10px;
`

export const TextButton = styled.Text`
    color: #008577;

    text-align: center;
    font-family: "Roboto-Bold";
    font-size: 15px;
`

export const Text = styled.Text`
    color: white;
    font-family: "Roboto-Regular";
    font-size: 13px;
    
`