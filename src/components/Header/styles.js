import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const TikiLogo = styled(LazyLoadImage)`
  margin: 112px 0 112px 0;
  width: 400px;
  height: 123.79px;
  @media (max-width: 544px) {
    width: 50%;
  }
`;
