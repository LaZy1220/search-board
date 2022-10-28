import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin: 0 auto;
  display: block;
  padding: 10px;
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
export const AuthButton = ({
  isRegistration,
  isCurrentUser,
  login,
  email,
  password,
  formValid,
  children,
}) => {
  const navigate = useNavigate();
  const registrationFunc = async (isWho, login, email, password) => {
    debugger;
    try {
      console.log("reg");
      const response = isWho
        ? await axios.post("https://makser-test.site/api/registration_user/", {
            email: email,
            login_name: login,
            password: password,
          })
        : await axios.post(
            "https://makser-test.site/api/registration_company/",
            {
              email: email,
              name: login,
              password: password,
            }
          );
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/search-board/login");
      }
      console.log("ok!!");
    } catch (e) {
      alert(e);
    }
  };
  const loginFunc = async (isWho, email, password) => {
    try {
      console.log("log");
      debugger;
      const response = isWho
        ? await axios.post("https://makser-test.site/api/login/", {
            email: email,
            password: password,
          })
        : await axios.post(
            "https://makser-test.site/api/login_company/",
            {
              email: email,
              password: password,
            },
            { withCredentials: true }
          );
      if (response.data.non_field_errors) {
        alert("Проверьте введенные данные");
      } else {
        navigate("/search-board/vacancies");
      }
      console.log(response.data);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Button
      disabled={!formValid}
      className={!formValid && "disabled"}
      onClick={() =>
        isRegistration
          ? registrationFunc(isCurrentUser, login, email, password)
          : loginFunc(isCurrentUser, email, password)
      }
    >
      {children}
    </Button>
  );
};
