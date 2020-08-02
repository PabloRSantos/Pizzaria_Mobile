import styled from "styled-components"

export const Drop = styled.div`

    width: 60%;
    height: 350px;
    background: #F6F5F4;
    border-radius: 10px;
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
    outline: 0;

    img {
    width: 100%;
    height: 100%; 
    object-fit: cover;
    border-radius: 10px;
  }
  
  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #307351;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
  }
  
  p svg {
    color: #327a55;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

`
