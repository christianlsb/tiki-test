import React from 'react';

import {
  WantToBePart,
  CrossYellow,
  Form,
  Footer,
  Header,
  InformationEvent,
} from './components';
import * as S from './styles/home';

function App() {
  return (
    <>
      <S.Container>
        <Header />
        <InformationEvent />
        <WantToBePart />
        <CrossYellow />
        <Form />
        <Footer />
      </S.Container>
    </>
  );
}

export default App;
