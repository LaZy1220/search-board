import axios from "axios";
export const registration = async (isWho, login, email, password) => {
  try {
    const response = isWho
      ? await axios.post("https://makser-test.site/api/registration_user/", {
          email: email,
          name: login,
          password: password,
        })
      : await axios.post("https://makser-test.site/api/registration_company/", {
          email: email,
          name: login,
          password: password,
        });
    response.data.error && alert(response.data.error);
    console.log("ok!!!");
  } catch (e) {
    alert(e);
  }
};
export const login = async (isWho, email, password) => {
  try {
    const response = await axios.post(
      isWho
        ? "https://makser-test.site/api/login/"
        : "https://makser-test.site/api/login_company/",
      {
        email: email,
        password: password,
      }
    );
    console.log(response.data);
  } catch (e) {
    alert(e);
  }
};
