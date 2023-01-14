import * as S from "./styles";
import { Input } from "./Input/styles";
import { InputRadio } from "./InputRadio";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (formState.isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    }
  };

  const schema = yup
    .object()
    .shape({
      name: yup.string().required().min(4),
      email: yup.string().email().required(),
    })
    .required();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <S.ContainerForm>
        <S.TitleForm>CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</S.TitleForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type={"text"}
            placeholder={"Nome"}
            {...register("name")}
            error={formState.name?.message}
          />
          <Input
            type={"email"}
            placeholder={"meuemail@gmail.com"}
            {...register("email")}
            error={formState.email?.message}
          />
          <S.ContainerTermPrivacy>
            <InputRadio />
            <S.LabelForm>
              Declaro que li e aceito a política de privacidade
            </S.LabelForm>
          </S.ContainerTermPrivacy>
          <S.Button type="submit" onClick={handleSubmitForm}>
            {isSubmitting ? "Loading..." : "Enviar"}
          </S.Button>
        </form>
      </S.ContainerForm>
    </>
  );
}
