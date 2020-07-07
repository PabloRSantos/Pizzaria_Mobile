import styled from "styled-components/native"


export const Main = styled.View`
 

`

export const Titulo = styled.Text`

        font-size: 32px;
        color: #008577;
        padding: 10px 15px 0;
        font-family: "Roboto_700Bold";
   
`

export const Content = styled.View`
    
    

    height: 225px;
    width: 175px;


    margin: 15px 10px 20px;
   
   
    background-color: white;

    border-radius: 10px;
    
    elevation: 7;
`

export const DivImagem = styled.View`
    flex: 1.2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

export const Imagem = styled.Image`
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`

export const Infos = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 10px;
    
`

export const Nome = styled.Text`
    font-family: "Roboto_500Medium";
    font-size: 18px;
    color: #404041;
`

export const Preco = styled.Text`
    font-family: "Roboto_700Bold";
    font-size: 22px;
    color: #404041; 
    margin-bottom: 5px;

`

export const Button = styled.TouchableOpacity`
    background-color: #008577;
    border-radius: 15px;
    align-items: center;

    padding: 4px 0;
`