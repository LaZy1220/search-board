import { useState } from "react";
import {
  AuthEl,
  AuthBox,
  Button,
  Title,
  FlexEl,
  Current,
  InputEl,
  UserIcon,
} from "../components/styled/AuthStyles";
import { Input } from "../components/Input";
import { Back } from "../components/Back";
import { registration } from "../auth/registration";
import user from "../images/form/user.png";
import mail from "../images/form/email.png";
import key from "../images/form/key.png";

export const RegisterPage = () => {
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  return (
    <AuthEl>
      <AuthBox>
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
        <InputEl>
          <UserIcon src={user} />
          <label>Ваш логин</label>
          <Input
            name="login"
            type="text"
            value={login}
            placeholder="name"
            onChange={(e) => setLogin(e.target.value)}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={mail} />
          <label>Ваша почта</label>
          <Input
            name="login"
            type="email"
            value={email}
            placeholder="yourmail@mail.ru"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          <label>Ваш пароль</label>
          <Input
            name="login"
            type="password"
            value={password}
            placeholder="your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          <label>Повторите пароль</label>
          <Input
            name="login"
            type="password"
            value={repPassword}
            placeholder="repeat password"
            onChange={(e) => setRepPassword(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
        </InputEl>
        <Button
          onClick={() => registration(isCurrentUser, login, email, password)}
        >
          Зарегистрироваться
        </Button>
      </AuthBox>
    </AuthEl>
  );
};
