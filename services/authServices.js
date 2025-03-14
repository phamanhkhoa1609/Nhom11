import axios from "axios";

const register = async (username, name, email, password) => {
  try {
    const res = await axios.post("http://localhost:8080/api/v1/auth/signup", {
      username: username,
      name: name,
      email: email,
      password: password,
    });

    if (res && res.data) {
      return res.data;
    }
  } catch (error) {
    return error.response.data;
  }
};

const login = async (username, password) => {
  const data = {
    grant_type: "password",
    username: username,
    password: password,
    scope: "client-internal",
  };

  const config = {
    maxBodyLength: Infinity,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic Y2xpZW50OnNlY3JldA==",
    },
  };

  try {
    const res = await axios.post(
      "http://localhost:8080/api/oauth2/v1/token",
      data,
      config
    );

    if (res && res.data) {
      localStorage.setItem("accessToken", res.data.access_token);
      localStorage.setItem("role", res.data.scope);
      localStorage.setItem("refreshToken", res.data.refresh_token);
      return res.data;
    }
  } catch (error) {
    return error.response;
  }
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("role");
  localStorage.removeItem("refreshToken");
};

const getToken = () => localStorage.getItem("token");

export { register, login, logout, getToken };
