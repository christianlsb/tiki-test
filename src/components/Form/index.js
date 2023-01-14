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
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  const schema = yup
    .object()
    .shape({
      name: yup
        .string()
        .required("O nome é obrigatório")
        .min(4, "O nome precisa ter ao menos 4 caracteres"),
      email: yup
        .string()
        .email("O email inserido não é valido")
        .required("O email é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <S.ContainerForm>
        <S.TitleForm>CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</S.TitleForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.ErrorMenssage>{errors.name?.message}</S.ErrorMenssage>
          <Input
            type={"text"}
            placeholder={"Nome"}
            {...register("name")}
            error={errors.name?.message}
          />
          <S.ErrorMenssage>{errors.email?.message}</S.ErrorMenssage>
          <Input
            type={"email"}
            placeholder={"meuemail@gmail.com"}
            {...register("email")}
            error={errors.email?.message}
          />
          <S.ContainerTermPrivacy>
            <InputRadio />
            <S.LabelForm>
              Declaro que li e aceito a política de privacidade
            </S.LabelForm>
          </S.ContainerTermPrivacy>
          {isSubmitting ? (
            <S.Button>Loading...</S.Button>
          ) : (
            <S.Button type="submit" handleSubmit={handleSubmitForm}>
              Enviar
            </S.Button>
          )}
        </form>
      </S.ContainerForm>
    </>
  );
}
