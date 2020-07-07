import styled from "styled-components/native"

export const BodyModal = styled.View`
    background-color: white;
    height: 200px;
    width: 90%;
    border-radius: 15px;

    align-items: center;
    justify-content: flex-end;

    padding: 30px;
`

export const ButtonModal = styled.TouchableOpacity`
    width: 100%;
    background-color: #008577;
    padding: 10px 0;
    color: white;

    margin-top: 50px;

`

export const TextModal = styled.Text`
    text-align: center;
    font-family: "Roboto_500Medium";
`


export const TextButton = styled.Text`
    color: white;

    text-align: center;
    font-family: "Roboto_700Bold";
    font-size: 15px;
`