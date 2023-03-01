import * as S from "./styles/home";

import { WantToBePart, CrossYellow, Form, Footer, Header, InformationEvent} from "./components";

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