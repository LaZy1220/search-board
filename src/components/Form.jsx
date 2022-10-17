import { useState } from "react";
import { InputEl, Input, UserIcon } from "./styled/Form";
import user from "../images/form/user.png";
import mail from "../images/form/email.png";
import key from "../images/form/key.png";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
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
        />
      </InputEl>
    </form>
  );
};
