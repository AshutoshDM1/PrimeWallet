import axios from "axios";
import toast from "react-hot-toast";

const API_URL_User = "https://prime-wallet-server.vercel.app/api/v1/user";
const API_URL_User2 = "https://prime-wallet-server.vercel.app/api/v1/account";
// const API_URL_User = "http://localhost:3000/api/v1/user";
// const API_URL_User2 = "http://localhost:3000/api/v1/account";

const handleError = (error) => {
  if (error.response) {
    console.error("Server error:", error.response.data);
    toast.error(`Server error: ${error.response.data.message}`);
    return error.response.data;
  } else if (error.request) {
    console.error("No response from server:", error.request);
    toast.error("No response from server");
  } else {
    console.error("Request error:", error.message);
    toast.error(`Request error: ${error.message}`);
  }
};

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL_User}/signup`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Form submitted successfully:", response.data);
    toast.success("Signup successful! ");
  } catch (error) {
    handleError(error);
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL_User}/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Login successful! ");
    const username = response.data.username;
    localStorage.setItem("username", username);
    const email = response.data.email;
    localStorage.setItem("email", email);
    const token = response.data.token;
    localStorage.setItem("token", token);
  } catch (error) {
    handleError(error);
  }
};

export const getUsers = async () => {
  try {
    const jwtToken = getToken();
    const response = await axios.get(`${API_URL_User}/users`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const username = getUsername();
    const data = response.data;
    const filteredUsers = data.allUsers.filter(
      (user) => user.username !== username
    );
    return filteredUsers;
  } catch (error) {
    return handleError(error);
  }
};

export const getBalance = async () => {
  try {
    const jwtToken = getToken();
    const response = await axios.get(`${API_URL_User2}/balance`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    return handleError(error);
  }
};

export const transferMoney = async (data) => {
  try {
    const jwtToken = getToken();
    const response = await axios.post(`${API_URL_User2}/transfer`, data, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const serverdata = response.data;
    toast.success(`yeeee!! ${serverdata.message}`);
    return serverdata;
  } catch (error) {
    return handleError(error);
  }
};

export const EditProfileAPI = async (data) => {
  try {
    const jwtToken = getToken();
    const response = await axios.put(`${API_URL_User}/user`, data, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const serverdata = response.data;
    toast.success(`${serverdata.message} : ${serverdata.username}`);
    localStorage.setItem("username", serverdata.username);
    localStorage.setItem("token", serverdata.token);
    return serverdata;
  } catch (error) {
    return handleError(error);
  }
};

export const addMoney = async (data) => {
  try {
    const jwtToken = getToken();
    const response = await axios.post(`${API_URL_User2}/addmoney`, data, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const serverdata = response.data;
    toast.success(`${serverdata.message}`);
    return serverdata;
  } catch (error) {
    return handleError(error);
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
};
export const getUsername = () => {
  const username = localStorage.getItem("username");
  if (!username) {
    return null;
  }
  return username;
};
export const getEmail = () => {
  const email = localStorage.getItem("email");
  if (!email) {
    return null;
  }
  return email;
};
