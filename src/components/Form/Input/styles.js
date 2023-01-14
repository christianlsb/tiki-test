import styled from "styled-components";
import { themes } from "../../../styles/theme";

export const Input = styled.input`
    width: 430px;
    height: 70px;
    border: 1px solid ${themes.colors.white};
    background-color: ${themes.colors.background};
    border-radius: 35px;
    font-size: ${themes.fontSize.sm};
    outline: none;
    padding-left: 27px;
    color: ${themes.colors.white};
    &:focus{
        border: 1px solid ${themes.colors.pink_500};
        color: ${themes.colors.pink_500};
        ::-webkit-input-placeholder{
            color: ${themes.colors.pink_500};
        }
    }
    margin-bottom: 16px;
`

