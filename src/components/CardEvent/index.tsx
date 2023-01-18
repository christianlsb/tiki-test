import * as S from "./styles";
import React from "react";

interface CardEventState {
  handleImage: any;
  backgroundImage: string;
  children: React.ReactNode;
  padLock: string;
}

export function CardEvent(
  {
  handleImage,
  backgroundImage,
  children,
  padLock,
}: CardEventState) {
  return (
    <>
      <S.ContainerCard>
        <S.Card onClick={handleImage} background={backgroundImage}>
          {padLock && <S.PadLock src={`${require("../../assets/svg/lock.svg").default}`}/>}
        </S.Card>
        <S.DateCard>{children}</S.DateCard>
      </S.ContainerCard>
    </>
  );
}
