import * as S from "./styles";
import React from "react";



export function CardEvent(
  {
  handleImage,
  backgroundImage,
  children,
  padLock,
}) {
  return (
    <>
      <S.ContainerCard>
        <S.Card onClick={handleImage} background={backgroundImage}>
          {padLock && <S.PadLock src={`${require("../../assets/SVG/lock.svg").default}`}/>}
        </S.Card>
        <S.DateCard>{children}</S.DateCard>
      </S.ContainerCard>
    </>
  );
}
