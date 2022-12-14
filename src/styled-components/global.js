import styled, { createGlobalStyle } from "styled-components";
import backdrop from '../res/backdrop.png'

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`

export const Container = styled.div`
    background-color: #141414;
    background-image: url(${backdrop}); 
    display: flex;
    height: 100vh;
    font-family: Helvetica, Arial, sans-serif;
`

export const Element = styled.div`
    background-color: #000;
    border: 2px solid #eee;
    border-radius: 20px; 
    margin: auto;
    margin-bottom: 5px;
    height: 50vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid #f6bf3a;
    border-radius: 20px;
    color: #eee;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: auto;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
        background-color: #f6bf3a;
        color: black;
    }
`

export const Text = styled.h3`
    margin: auto;
    color: #eee;
    font-size: 24px;
    margin-bottom: 0px;
`

export const HeaderText = styled.h1`
    margin: auto;
    color: #eee;
    font-size: 40px;
`

export const SVG = styled.svg`
    margin: auto;
    margin-top: 0px;
    height: 400px;
    width: 95%;
`