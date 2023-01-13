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
  ContainerCard,
  Card,
  DateCard,
  PadLock,
} from "./style";

import Carousel from "react-elastic-carousel";
import CrossYellowImg from "../../assets/SVG/icon-yellow.svg";
import SpoliersImg from "../../assets/SVG/tittle1.svg";
import ArrowDownImg from "../../assets/SVG/arrow down.svg";
import EventImg from "../../assets/Imagens/imagem.jpg";
import EventImg2 from "../../assets/Imagens/imagem2.jpg";
import PadlockImg from "../../assets/SVG/lock.svg";

function Event() {

  return (
    <>
      <Container>
        <Tittle>CUIDADO, AO ROLAR PODE CONTER...</Tittle>
        <CrossYellow src={CrossYellowImg} />
        <Spoliers src={SpoliersImg} />
        <ArrowDown src={ArrowDownImg} />
        <YouKnow>VOCÊ JÁ ESTAVA SABENDO?</YouKnow>
        <ContainerMainEvent background={EventImg}></ContainerMainEvent>
        <CheckOut>CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!</CheckOut>
        <ContainerCarousel>
          <Carousel itemsToShow={3}>
            <ContainerCard>
              <Card background={EventImg}></Card>
              <DateCard>16 DE MARÇO</DateCard>
            </ContainerCard>
            <ContainerCard>
              <Card background={EventImg2}></Card>
              <DateCard>17 DE MARÇO</DateCard>
            </ContainerCard>
            <ContainerCard>
              <Card>
                <PadLock src={PadlockImg} />
              </Card>
              <DateCard>18 DE MARÇO</DateCard>
            </ContainerCard>
            <ContainerCard>
              <Card>
                <PadLock src={PadlockImg} />
              </Card>
              <DateCard>21 DE MARÇO</DateCard>
            </ContainerCard>
            <ContainerCard>
              <Card>
                <PadLock src={PadlockImg} />
              </Card>
              <DateCard>21 DE MARÇO</DateCard>
            </ContainerCard>
            <ContainerCard>
              <Card>
                <PadLock src={PadlockImg} />
              </Card>
              <DateCard>21 DE MARÇO</DateCard>
            </ContainerCard>
            <ContainerCard>
              <Card>
                <PadLock src={PadlockImg} />
              </Card>
              <DateCard>21 DE MARÇO</DateCard>
            </ContainerCard>
          </Carousel>
        </ContainerCarousel>
      </Container>
    </>
  );
}

export default Event;
