import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root{
        --background-color: #26093a;
        --primary-color: #280031;
        --second-color: #FCBBEE;
        --third-color: #8F0DFF;
        --white-deffault: #FFFFFF
    }
`