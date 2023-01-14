import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Button = styled.button`
    width: 425px;
    height: 70px;
    border-radius: 40px;
    cursor: pointer;
    box-shadow: 1px solid ${themes.colors.pink_500};
    background-color: ${themes.colors.white};
    font-size: ${themes.fontSize["2xl"]};
    font-weight: ${themes.fontWeight.bold};
    color: ${themes.colors.background};
    border: none;
    box-shadow: 3px 5px 0px ${themes.colors.pink_500};
    background-color: ${themes.colors.white};
    margin-top: 15px;
`