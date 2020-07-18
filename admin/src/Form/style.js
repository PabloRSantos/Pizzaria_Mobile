import styled from "styled-components"

export const Formulario = styled.div`
    background-color: white;
    border-radius: 15px;

    width: 60vw;
    min-height: 70vh;

        padding: 24px;
        margin: 24px auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    input {
        border: none;
        border-radius: 8px;
        padding: 10px 5px;

        background-color: rgb(236, 235, 235);



        margin: 10px 0;
        width: 60%;
    }

    button {
        background-color: #008577;
        color: white;

        border: none;
        border-radius: 8px;

        font-size: 16px;
        font-weight: 600;

        width: 60%;
        padding: 13px 5px;
    }

    select {
        color: rgb(116, 134, 153);
        height: 40px;
        width: 60%;
        margin-top: 10px;
        outline: none;
        border: none;
        border-radius: 8px;
        padding: 10px 5px;
        background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #eeeeee; 
        -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none; 
        background-position: 100% center;
    }
`