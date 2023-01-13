import {
  Container,
  Tittle,
  CrossYellow,
  Spoliers,
  ArrowDown,
  YouKnow,
  ContainerMainEvent,
  CheckOut,
  ContainerCarousel,
} from "./style";
import CrossYellowImg from "../../assets/SVG/icon-yellow.svg";
import SpoliersImg from "../../assets/SVG/tittle1.svg";
import ArrowDownImg from "../../assets/SVG/arrow down.svg";
function Event() {
  return (
    <>
      <Container>
        <Tittle>CUIDADO, AO ROLAR PODE CONTER...</Tittle>
        <CrossYellow src={CrossYellowImg} />
        <Spoliers src={SpoliersImg} />
        <ArrowDown src={ArrowDownImg} />
        <YouKnow>VOCÊ JÁ ESTAVA SABENDO?</YouKnow>
        <ContainerMainEvent></ContainerMainEvent>
        <CheckOut>CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!</CheckOut>
        <ContainerCarousel>
         
        </ContainerCarousel>
      </Container>
    </>
  );
}

export default Event;
