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
`;

export const Title = styled.h2`
  font-size: ${themes.fontSize["4xl"]};
  -webkit-text-stroke: 1px ${themes.colors.white};
  font-weight: ${themes.fontWeight.bold};
  color: ${themes.colors.background};
`;

export const Text = styled.p`
  font-weight: ${themes.fontWeight.bold};
  font-size: ${themes.fontSize.lg};
  line-height: 80px;
  color: ${themes.colors.white};
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
`;

export const ImgEvent = styled(LazyLoadImage)`
  width: 900px;
  height: 471px;
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
`;