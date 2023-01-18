import styled from "styled-components";
import { themes } from "../../styles/theme";
import { LazyLoadImage } from "react-lazy-load-image-component";




export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  @media(max-width: 768px){
    width: 80%;
  }  
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 104.67px;
  background: ${themes.colors.purple_900};
  box-shadow: -10px 20px 25px rgba(143, 13, 255, 0.160784);
  border-radius: 20px;
  margin-left: 15px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
  }
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  @media(max-width: 768px){
    width: 80%;
  }
`;

export const DateCard = styled.p`
  color: ${themes.colors.white};
  font-weight: 700;
  font-size: ${themes.fontSize.lg};
  margin-top: 10px;
`;

export const PadLock = styled(LazyLoadImage)`
    width: 20px;
    height: 20px;
`