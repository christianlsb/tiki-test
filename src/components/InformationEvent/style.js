import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1088px;
  height: 1587px;
  border-radius: 131px;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
`;

export const Tittle = styled.h2`
  font-size: 36px;
  -webkit-text-stroke: 1px #ffffff;
  font-weight: bold;
  color: #26093a;
`;

export const CrossYellow = styled.img``;

export const Spoliers = styled.img``;

export const ArrowDown = styled.img``;

export const YouKnow = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 80px;
  color: var(--white-deffault);
`;

export const ContainerMainEvent = styled.div`
  display: flex;
  width: 900px;
  height: 471px;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  border-radius: 40px;
`;

export const CheckOut = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 80px;
  color: var(--white-deffault);
`;

export const ContainerCarousel = styled.div`
  display: flex;
  width: 875px;
  height: 200px;
  align-items: center;
  justify-content: center;
  .rec.rec-arrow {
    box-shadow: 3px 5px #FC2BEE;
    background-color: var(--white-deffault);
    opacity: 100%;
}
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 200px;
  height: 104.67px;
  flex-direction: column;
  width: 200px;
  height: 104.67px;
  background-color: blue;
  background: #1E062E;
  box-shadow: -10px 20px 25px rgba(143, 13, 255, 0.160784);
  border-radius: 20px;
  margin-left: 15px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
  }
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
`;

export const DateCard = styled.text`
  color: var(--white-deffault);
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
`;


export const PadLock = styled.img`
  width: 20px;
  height: 20px;
`