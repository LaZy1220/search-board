import { useState } from "react";
import { Form } from "../components/Form";
import {
  RegisterEl,
  RegisterBox,
  Button,
  Title,
  FlexEl,
  Current,
} from "../components/styled/RegisterPage";
import { Back } from "../components/Back";

export const RegisterPage = () => {
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  return (
    <RegisterEl>
      <RegisterBox>
        <Back />
        <Title>Регистрация</Title>
        <FlexEl>
          <Current
            onClick={() => setIsCurrentUser(true)}
            className={isCurrentUser ? "active" : ""}
          >
            Пользователь
          </Current>
          <Current
            onClick={() => setIsCurrentUser(false)}
            className={isCurrentUser ? "" : "active"}
          >
            Компания
          </Current>
        </FlexEl>
        <Form />
        <Button>Зарегистрироваться</Button>
      </RegisterBox>
    </RegisterEl>
  );
};
