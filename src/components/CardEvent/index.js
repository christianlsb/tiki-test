import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';
export function CardEvent({ handleImage, backgroundImage, children, padLock }) {
  return (
    <>
      <S.ContainerCard>
        <S.Card onClick={handleImage} background={backgroundImage}>
          {padLock && (
            <S.PadLock
              src={`${require('../../assets/SVG/lock.svg').default}`}
            />
          )}
        </S.Card>
        <S.DateCard>{children}</S.DateCard>
      </S.ContainerCard>
    </>
  );
}

CardEvent.propTypes = {
  children: PropTypes.string,
  backgroundImage: PropTypes.string,
  handleImage: PropTypes.func,
  padLock: PropTypes.bool,
};
