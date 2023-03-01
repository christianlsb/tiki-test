import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Input } from './Input/styles';
import { InputRadio } from './InputRadio';
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
      name: yup.string().required().min(4),
      email: yup.string().email().required(),
    })
    .required();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <S.ContainerForm>
        <S.TitleForm>CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</S.TitleForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type={'text'} placeholder={'Nome'} {...register('name')} />
          <Input
            type={'email'}
            placeholder={'meuemail@gmail.com'}
            {...register('email')}
          />
          <S.ContainerTermPrivacy>
            <InputRadio />
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
