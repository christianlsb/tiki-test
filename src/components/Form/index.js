import * as S from "./styles";
import { Input } from "./Input/styles";
import { Button } from "../Button";
import {InputRadio} from "./InputRadio"

export function Form() {
  return (
    <>
      <S.ContainerForm>
        <S.TitleForm>CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</S.TitleForm>
        <Input placeholder={"Nome"} />
        <Input placeholder={"meuemail@gmail.com"} />
        <S.ContainerTermPrivacy>
          <InputRadio/>
          <S.LabelForm>
            Declaro que li e aceito a política de privacidade
          </S.LabelForm>
        </S.ContainerTermPrivacy>
        <Button>Teste</Button>
      </S.ContainerForm>
    </>
  );
}
