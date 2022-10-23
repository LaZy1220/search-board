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
import { InputError } from "../components/InputError";

export const RegisterPage = () => {
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [loginError, setLoginError] = useState("Логин не может быть пустым");
  const [emailError, setMailError] = useState("Почта не может быть пустой");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

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
          {loginDirty && loginError && <div>{loginError}</div>}
          <Input
            name="login"
            type="text"
            value={login}
            placeholder="name"
            setValue={setLogin}
            blurHandler={blurHandler}
          />
        </InputEl>
        <InputEl>
          {emailDirty && emailError && <InputError>{emailError}</InputError>}
          <UserIcon src={mail} />
          <label>Ваша почта</label>
          <div>
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="yourmail@mail.ru"
              setValue={setEmail}
              blurHandler={blurHandler}
            />
          </div>
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          <label>Ваш пароль</label>
          {passwordDirty && passwordError && (
            <InputError>{passwordError}</InputError>
          )}
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="your password"
            setValue={setPassword}
            blurHandler={blurHandler}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          <label>Повторите пароль</label>
          <Input
            name="repPassword"
            type="password"
            value={repPassword}
            placeholder="repeat password"
            setValue={setRepPassword}
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
