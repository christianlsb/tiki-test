import styled from "styled-components";
import {themes} from "../../styles/theme"
import { LazyLoadImage } from "react-lazy-load-image-component";

export const Container = styled.div`
    display: flex;
    width: 1088px;
    height: 1587px;
    border-radius: 131px;
    flex-direction: column;
    align-items: center;
    background-color: ${themes.colors.background};
    margin-bottom: 69px;
    gap: 45px;

    @media  (max-width: 1096px) { 
      width: 80%;
  }
`;

export const Title = styled.h2`
  font-size: ${themes.fontSize["4xl"]};
  -webkit-text-stroke: 1px ${themes.colors.white};
  font-weight: ${themes.fontWeight.bold};
  color: ${themes.colors.background};
  margin-top: 89px;
  margin-bottom: 30px;
  @media (max-width: 1096px) { 
      width: 70%;
      text-align: center;
  }
  
`;

export const Text = styled.p`
  font-weight: ${themes.fontWeight.bold};
  font-size: ${themes.fontSize.lg};
  line-height: 80px;
  color: ${themes.colors.white};
  @media (max-width: 546px) {
      text-align: center;
  }
`;

export const MainEvent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 471px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  border-radius: 40px;
  @media  (max-width: 1096px) { 
    width: 88%;
    height: 293px;
  }

  @media(max-width: 768px){
    width: 100%;
    height: 200px
  }
`;

export const ImgEvent = styled(LazyLoadImage)`
  width: 900px;
  height: 471px;
  @media  (max-width: 1096px) { 
      width: 70%;
      height: 300px
  }
  @media(max-width: 768px){
    height: 200px
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  width: 875px;
  height: 200px;
  align-items: center;
  justify-content: center;
  .rec.rec-arrow {
    box-shadow: 3px 5px ${themes.colors.pink_500};
    background-color: ${themes.colors.white};
    opacity: 100%;
  }

  @media  (max-width: 1096px) { 
      width: 100%;
  }
`;


export const Spoilers = styled(LazyLoadImage)`
     width: 60%;
`


