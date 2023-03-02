import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { CheackBox } from './InputCheackbox';
import * as S from './styles';

export function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitForm = () => {
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
      name: yup
        .string()
        .required('O nome é obrigatório')
        .min(4, 'O nome deve conter no minimo 4 digitos'),
      email: yup
        .string()
        .email('O email deve ser valido')
        .required('O email é obrigatório'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <S.ContainerForm>
        <S.TitleForm>CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</S.TitleForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.ErrorMassage>{errors.name?.message}</S.ErrorMassage>
          <S.Input
            type={'text'}
            placeholder={'Nome'}
            {...register('name')}
            error={errors.name?.message}
          />
          <S.ErrorMassage>{errors.email?.message}</S.ErrorMassage>
          <S.Input
            type={'email'}
            placeholder={'meuemail@gmail.com'}
            {...register('email')}
            error={errors.email?.message}
          />
          <S.ContainerTermPrivacy>
            <CheackBox />
            <S.LabelForm>
              Declaro que li e aceito a política de privacidade
            </S.LabelForm>
          </S.ContainerTermPrivacy>
          <S.Button type="submit" onClick={handleSubmitForm}>
            {isSubmitting ? 'Loading... =)' : 'Enviar'}
          </S.Button>
        </form>
      </S.ContainerForm>
    </>
  );
}
