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
  } catch (e) {
    alert(e);
  }
};