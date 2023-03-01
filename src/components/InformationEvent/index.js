import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import EventImg from '../../assets/image/imagem.jpg';
import EventImg2 from '../../assets/image/imagem2.jpg';
import ArrowDownImg from '../../assets/SVG/arrow down.svg';
import PadlockImg from '../../assets/SVG/lock.svg';
import SpoilersImg from '../../assets/SVG/tittle1.svg';
import { CardEvent } from '../CardEvent';
import { CrossYellow } from '../CrossYellow';
import * as S from './styles';

export function InformationEvent() {
  const images = {
    img1: EventImg,
    img2: EventImg2,
    img3: PadlockImg,
  };

  const [image, setImage] = useState('img1');

  const handleImage = newImagem => setImage(newImagem);
  return (
    <>
      <S.Container>
        <S.Title>CUIDADO, AO ROLAR PODE CONTER...</S.Title>
        <CrossYellow />
        <S.Spoilers src={SpoilersImg} alt="spoiler" />
        <LazyLoadImage src={ArrowDownImg} alt="arrow-down" />
        <S.Text>VOCÊ JÁ ESTAVA SABENDO?</S.Text>
        <S.MainEvent>
          <S.ImgEvent src={images[image]} />
        </S.MainEvent>
        <S.Text>CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!</S.Text>
        <S.WrapperCards>
          <Carousel itemsToShow={3}>
            <CardEvent
              handleImage={() => handleImage('img1')}
              backgroundImage={EventImg}
            >
              16 DE MARÇO
            </CardEvent>

            <CardEvent
              handleImage={() => handleImage('img2')}
              backgroundImage={EventImg2}
            >
              17 DE MARÇO
            </CardEvent>

            <CardEvent handleImage={() => handleImage('img3')} padLock>
              18 DE MARÇO
            </CardEvent>

            <CardEvent handleImage={() => handleImage('img3')} padLock>
              19 DE MARÇO
            </CardEvent>
          </Carousel>
        </S.WrapperCards>
      </S.Container>
    </>
  );
}
