import {
  Container,
} from "./styles/home";

import WantToBePartImage from "./assets/svg/WantToBePart.svg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import {InformationEvent} from "./components/InformationEvent";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { CrossYellow } from "./components/CrossYellow";

function App() {
  return (
    <>
      <Container>
        <Header/>
        <InformationEvent/>
        <LazyLoadImage src={WantToBePartImage}/>
        <CrossYellow/>
        <Form/>
        <Footer/>
      </Container>  
    </>
  );
}

export default App;