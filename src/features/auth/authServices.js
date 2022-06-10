import axios from "axios";

const API_URL = "user/";

//Register user
const register = async (userData) => {
  console.log(userData);
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Register user
const login = async (userData) => {
  console.log(userData);
  const response = await axios.get(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//Log Out
const logout = () => {
  localStorage.removeItem("user");
};

const authServices = { register, logout, login };
export default authServices;
