import * as S from "./styles";

import PadlockImg from "../../assets/svg/lock.svg";

export function CardEvent({
  handleImage,
  backgroundImage,
  children,
  padLock,
}) {
  return (
    <>
      <S.ContainerCard>
        <S.Card onClick={handleImage} background={backgroundImage}>
          {padLock && <S.PadLock src={PadlockImg} />}
        </S.Card>
        <S.DateCard>{children}</S.DateCard>
      </S.ContainerCard>
    </>
  );
}
