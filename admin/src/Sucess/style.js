import styled from "styled-components"
import {FiCheckCircle} from "react-icons/fi"



export const Modal = styled.div`
    width: 300px;
    max-width: 40%;
    height: 70px;
    background-color: #008577;
    padding: 8px;
    border-radius: 6px;

    box-shadow: 0 1px 10px 2px rgba(0, 0, 0, 0.349);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 85vh auto 0 auto;
    z-index: 5;

    transition: 1s;

    transform: ${props => props.show === true ? "translateY(0px)" : "translateY(150px)"};


    p{
        color:white;
    font-weight: 600;
    font-size: 20px;
    }

`

export const Icon = styled(FiCheckCircle)`
    color: white;
    width: 50px;
    font-size: 24px;
`