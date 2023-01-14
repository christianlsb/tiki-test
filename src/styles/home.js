import styled from "styled-components";
import BackgroundImage from "../assets/image/Background.jpg"

export const Container = styled.div`
   background: url(${BackgroundImage});
   background-size: cover;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 30px
`