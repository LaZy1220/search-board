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
  const [repPasswordDirty, setRepPasswordDirty] = useState(false);
  const [loginError, setLoginError] = useState("Логин не может быть пустым");
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [repPasswordError, setRepPasswordError] = useState(
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
      case "repPassword":
        setRepPasswordDirty(true);
        break;
    }
  };
  const loginHandler = (e) => {
    setLogin(e.target.value);
    if (e.target.value.trim().length === 0) {
      setLoginError("Логин не может быть пустым");
    } else {
      setLoginError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const uppCase = /[A-Z]/;
    const specSymb = /[!@#$%^&*()\-=_+~[\]{}'"\\|,./<>?]/;
    if (e.target.value.trim().length < 8 && e.target.value.trim().length >= 1) {
      setPasswordError("Пароль слишком маленький");
    } else if (e.target.value.trim().length === 0) {
      setPasswordError("Пароль не может быть пустым");
    } else if (!uppCase.test(e.target.value)) {
      setPasswordError("Пароль должен содержать символ в верхнем регистре");
    } else if (!!specSymb.test(e.target.value)) {
      setPasswordError("Пароль не должен содержать спец. символы");
    } else {
      setPasswordError("");
    }
    if (repPassword !== e.target.value) {
      setRepPasswordError("Пароли не совпадают");
    } else {
      setRepPasswordError("");
    }
  };
  const repPasswordHandler = (e) => {
    setRepPassword(e.target.value);
    if (password !== e.target.value) {
      setRepPasswordError("Пароли не совпадают");
    } else {
      setRepPasswordError("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректная почта");
    } else {
      setEmailError("");
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
          {loginDirty && loginError ? (
            <InputError>{loginError}</InputError>
          ) : (
            <label>Ваш логин</label>
          )}
          <Input
            name="login"
            type="text"
            value={login}
            placeholder="name"
            setValue={loginHandler}
            blurHandler={blurHandler}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={mail} />
          {emailDirty && emailError ? (
            <InputError>{emailError}</InputError>
          ) : (
            <label>Ваша почта</label>
          )}
          <div>
            <Input
              name="email"
              type="email"
              value={email}
              placeholder="yourmail@mail.ru"
              setValue={emailHandler}
              blurHandler={blurHandler}
            />
          </div>
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          {passwordDirty && passwordError ? (
            <InputError>{passwordError}</InputError>
          ) : (
            <label>Ваш пароль</label>
          )}
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="your password"
            setValue={passwordHandler}
            blurHandler={blurHandler}
          />
        </InputEl>
        <InputEl>
          <UserIcon src={key} />
          {repPasswordDirty && repPasswordError ? (
            <InputError>{repPasswordError}</InputError>
          ) : (
            <label>Повторите пароль</label>
          )}
          <Input
            name="repPassword"
            type="password"
            value={repPassword}
            placeholder="repeat password"
            setValue={repPasswordHandler}
            blurHandler={blurHandler}
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
