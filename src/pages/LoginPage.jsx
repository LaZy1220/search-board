import { useState } from "react";
import {
  AuthEl,
  AuthBox,
  Title,
  FlexEl,
  Current,
  InputEl,
  UserIcon,
} from "../components/styled/AuthStyles";
import { Input } from "../components/Input";
import { Back } from "../components/Back";
import mail from "../images/form/email.png";
import key from "../images/form/key.png";
import { AuthButton } from "../components/AuthButton";

export const LoginPage = () => {
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <AuthEl>
      <AuthBox>
        <Back />
        <Title>Авторизация</Title>
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
        <InputEl>
          <UserIcon src={mail} />
          <label>Ваша почта</label>
          <Input
            type="email"
            value={email}
            placeholder="yourmail@mail.ru"
            setValue={emailHandler}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          <label>Ваш пароль</label>
          <Input
            type="password"
            value={password}
            placeholder="your password"
            setValue={passwordHandler}
          />
        </InputEl>
        <AuthButton
          formValid={true}
          email={email}
          password={password}
          isCurrentUser={isCurrentUser}
        >
          Войти
        </AuthButton>
      </AuthBox>
    </AuthEl>
  );
};
