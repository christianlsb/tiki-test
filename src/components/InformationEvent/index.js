import * as S from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { useState } from "react";
import { CardEvent } from "../CardEvent";

import Carousel from "react-elastic-carousel";
import CrossYellowImg from "../../assets/svg/icon-yellow.svg";
import SpoilersImg from "../../assets/svg/tittle1.svg";
import ArrowDownImg from "../../assets/svg/arrow down.svg";
import EventImg from "../../assets/image/imagem.jpg";
import EventImg2 from "../../assets/image/imagem2.jpg";
import PadlockImg from "../../assets/svg/lock.svg";

export function InformationEvent() {
  const images = {
    img1: EventImg,
    img2: EventImg2,
    img3: PadlockImg,
  };

  const [image, setImage] = useState("img1");

  const handleImage = (newImagem) => setImage(newImagem);

  return (
    <>
      <S.Container>
        <S.Title>CUIDADO, AO ROLAR PODE CONTER...</S.Title>
        <LazyLoadImage src={CrossYellowImg} alt="cross-yellow" />
        <LazyLoadImage src={SpoilersImg} alt="spoiler" />
        <LazyLoadImage src={ArrowDownImg} alt="arrow-down" />
        <S.Text>VOCÊ JÁ ESTAVA SABENDO?</S.Text>
        <S.MainEvent>
          <S.ImgEvent src={images[image]} />
        </S.MainEvent>
        <S.Text>CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!</S.Text>
        <S.WrapperCards>
          <Carousel itemsToShow={3}>
            <CardEvent
              handleImage={() => handleImage("img1")}
              backgroundImage={EventImg}
            >
              16 DE MARÇO
            </CardEvent>

            <CardEvent
              handleImage={() => handleImage("img2")}
              backgroundImage={EventImg2}
            >
              17 DE MARÇO
            </CardEvent>

            <CardEvent handleImage={() => handleImage("img3")} padLock>
              18 DE MARÇO
            </CardEvent>

            <CardEvent handleImage={() => handleImage("img3")} padLock>
              19 DE MARÇO
            </CardEvent>
          </Carousel>
        </S.WrapperCards>
      </S.Container>
    </>
  );
}
