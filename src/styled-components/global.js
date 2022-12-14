import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`

export const Container = styled.div`
    background-color: #141414;
    display: flex;
    height: 100vh;
`

export const Element = styled.div`
    background-color: #1c1c1c;
    border-radius: 20px;
    margin: auto;
    height: 50vh;
    width: 90vw;
    display: flex;
`

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid #4a008f;
    color: #eee;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: auto;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #4a008f;
        color: white;
    }
`