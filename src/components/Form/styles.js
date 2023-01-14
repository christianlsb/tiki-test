import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
import { themes } from "../../styles/theme";

export const ContainerForm = styled.div`
  width: 535px;
  height: 584px;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  border-radius: 80px;
  margin-top: 50px;
  background-color: ${themes.colors.background};
  form {
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
`;

export const TitleForm = styled.h3`
  width: 347px;
  color: ${themes.colors.white};
  font-size: ${themes.fontSize.lg};
  text-align: center;
  margin: 80px 0 44px 0;
`;

export const ContainerTermPrivacy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputTermPrivacy = styled.input`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const RadioBox = styled.div`
  background-color: red;
`;

export const LabelForm = styled.label`
  color: ${themes.colors.white};
  font-weight: ${themes.fontWeight.normal};
  font-size: ${themes.fontSize.xs};
`;

export const Loading = styled.p``;

export const Button = styled.button`
  width: 425px;
  height: 70px;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 1px solid ${themes.colors.pink_500};
  background-color: ${themes.colors.white};
  font-size: ${themes.fontSize["2xl"]};
  font-weight: ${themes.fontWeight.bold};
  color: ${themes.colors.background};
  border: none;
  box-shadow: 3px 5px 0px ${themes.colors.pink_500};
  background-color: ${themes.colors.white};
  margin-top: 15px;
`;

export const ErrorMenssage = styled.p`
  color: ${themes.colors.red_900};
  font-size: ${themes.fontSize.lg};
  font-weight: ${themes.fontWeight.bold};
  margin: 5px 0 15px 0;
`