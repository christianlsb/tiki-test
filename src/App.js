import * as S from "./styles/home";

import {InformationEvent} from "./components/InformationEvent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { CrossYellow } from "./components/CrossYellow";
import { WantToBePart} from "./components/WantToBePart";

function App() {
  return (
    <>
      <S.Container>
        <Header/>
        <InformationEvent/>
        <WantToBePart/>
        <CrossYellow/>
        <Form/>
        <Footer/>
      </S.Container>  
    </>
  );
}

export default App;