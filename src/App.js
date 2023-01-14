import {
  Container,
} from "./styles/home";

import {InformationEvent} from "./components/InformationEvent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
      <Container>
        <Header/>
        <InformationEvent/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;