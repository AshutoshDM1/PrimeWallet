import axios from "axios";
import toast from "react-hot-toast";

const API_URL_User = "https://prime-wallet-server.vercel.app/api/v1/user"

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
    if (error.response) {
      console.error("Server error:", error.response.data);
      toast.error(`Server error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error("No response from server:", error.request);
      toast.error("No response from server");
    } else {
      console.error("Request error:", error.message);
      toast.error(`Request error: ${error.message}`);
    }
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
    const token = response.data.token;
    localStorage.setItem("token", token);
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      toast.error(`Server error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error("No response from server:", error.request);
      toast.error("No response from server");
    } else {
      console.error("Request error:", error.message);
      toast.error(`Request error: ${error.message}`);
    }
  }
};
export const getUsers = async () => {
  try {
    const jwtToken = getToken();
    console.log(jwtToken)
    const response = await axios.get(
      `${API_URL_User}/users`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
};