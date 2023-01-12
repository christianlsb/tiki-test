import {
  Container,
  TikiLogo,
} from "./styles/style";

import Event from "./components/InformationEvent/event";
import LogoTiki from "./assets/SVG/logo-tiki.svg";


function App() {
  return (
    <>
      <Container>
        <TikiLogo src={LogoTiki} />
        <Event/>
      </Container>
    </>
  );
}

export default App;
