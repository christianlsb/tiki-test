import * as S from "./styles";
import { Input } from "./Input/styles";
import { InputRadio } from "./InputRadio";
import { useState } from "react";

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true);

    setTimeout(() => {
        setIsSubmitting(false);
    }, 3000); 
  };

  return (
    <>
      <S.ContainerForm>
        <S.TitleForm>CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</S.TitleForm>
        <Input type={"text"} placeholder={"Nome"} />
        <Input type={"email"} placeholder={"meuemail@gmail.com"} />
        <S.ContainerTermPrivacy>
          <InputRadio />
          <S.LabelForm>
            Declaro que li e aceito a política de privacidade
          </S.LabelForm>
        </S.ContainerTermPrivacy>
        {isSubmitting ? (
          <S.Button>Loading...</S.Button>
        ) : (
          <S.Button type onClick={handleSubmit}>Teste</S.Button>
        )}
      </S.ContainerForm>
    </>
  );
}
