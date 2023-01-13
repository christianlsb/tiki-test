import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150px;
  background-color: green;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 104.67px;
  background-color: blue;
  border-radius: 20px;
  margin-left: 15px;
`;

export const Date = styled.text`
    color: var(--white-deffault);
    font-weight: 700;
    font-size: 18px;
    margin-top: 10px;
`;
