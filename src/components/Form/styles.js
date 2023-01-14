import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";
import { themes } from "../../styles/theme";

export const ContainerForm = styled.div`
  width: 535px;
  height: 584px;
  display: flex;
  flex-direction: column;
  border-radius: 80px;
  margin-top: 50px;
  background-color: ${themes.colors.background};
  align-items: center;
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
