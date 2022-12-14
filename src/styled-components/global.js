import styled, { createGlobalStyle } from "styled-components";
import backdrop from '../res/backdrop.png'
import { min, max } from "../device";

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
    background-size: contain;
    display: flex;
    height: 100vh;
    font-family: Helvetica, Arial, sans-serif;

    @media screen and (${min.mobileS}) and (${max.mobileL}) {
        background-repeat: no-repeat;
        background-size: 100vh;
        background-position: top ;
    }
`

export const Element = styled.div`
    background-color: #000;
    display: flex;
    flex-direction: column;
    margin: auto;
    overflow: auto;

    @media screen and (${min.mobileS}) and (${max.mobileL}) {
        border-radius: 20px;
        margin-bottom: 5px;
        height: 50vh;
        width: 100vw;
    }

    @media screen and (${min.laptop}) {
        border: 2px solid #eee;
        border-radius: 20px;
        margin-bottom: 5px;
        height: 50vh;
        width: 50vw;
    }
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
    
    @media screen and (${min.mobileS}) and (${max.mobileL}) {
        font-size: 16px;
    }
    
    @media screen and (${min.laptop}) {
        font-size: 24px;
        margin-bottom: 0px;
    }
`

export const HeaderText = styled.h1`
    margin: auto;
    color: #eee;

    @media screen and (${min.mobileS}) and (${max.mobileL}) {
        font-size: 25px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    @media screen and (${min.laptop}) {
        font-size: 40px;
    }
`

export const SVG = styled.svg`
    margin: auto;
    margin-top: 0px;
    height: 400px;
    width: 900px;
`