import { Form } from "../components/Form";
import styled from "styled-components";

export const RegisterEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const RegisterBox = styled.div`
  padding: 35px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 15px 5px #6d7daf;
  border: 1px solid rgba(147, 184, 189, 0.8);
  width: 40%;
`;
export const Title = styled.h1`
  font-family: "FranchiseRegular", "Arial Narrow", Arial, sans-serif;
  color: rgb(6, 106, 117);
  padding-bottom: 20px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 20px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, rgba(147, 184, 189, 0)),
      color-stop(20%, rgba(147, 184, 189, 0.8)),
      color-stop(53%, rgba(147, 184, 189, 1)),
      color-stop(79%, rgba(147, 184, 189, 0.8)),
      color-stop(100%, rgba(147, 184, 189, 0))
    );
  }
`;
export const FlexEl = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  width: 170px;
  height: 40px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 0px 10px 3px rgb(6, 106, 117);
  color: rgb(6, 106, 117);
  &:hover {
    background-color: rgba(147, 184, 189, 1);
    color: rgb(255, 255, 255);
  }
`;

export const RegisterPage = () => {
  return (
    <RegisterEl>
      <RegisterBox>
        <Title>Регистрация</Title>
        <Form />
        <FlexEl>
          <Button>На главную</Button>
          <Button>Продолжить</Button>
        </FlexEl>
      </RegisterBox>
    </RegisterEl>
  );
};
