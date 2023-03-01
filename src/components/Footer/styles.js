import styled from 'styled-components';

import { themes } from '../../styles/theme';

export const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const TitleFooter = styled.h3`
  color: ${themes.colors.white};
  font-weight: ${themes.fontWeight.bold};
  font-size: ${themes.fontSize['4xl']};
  text-align: center;
`;

export const TextFooter = styled.p`
  width: 1088px;
  margin-top: 30px;
  color: ${themes.colors.white};
  font-weight: ${themes.fontWeight.normal};
  font-size: ${themes.fontSize.xs};
  text-align: center;

  @media (max-width: 1096px) {
    width: 100%;
  }
`;
