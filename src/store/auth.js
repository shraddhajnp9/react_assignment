import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import axios from "axios";

const initialUsers = () => {
  const item = window.localStorage.getItem("users");
  return item
    ? JSON.parse(item)
    : [
        {
          id: uuidv4(),
          name: "dashcode",
          userId: "dashcode5432",
          password: "dashcode",
        },
      ];
};
// save users in local storage

const initialIsAuth = () => {
  const item = window.localStorage.getItem("isAuth");
  return item ? JSON.parse(item) : false;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: initialUsers(),
    isAuth: initialIsAuth(),
    customers: [],
  },
  reducers: {
    handleRegister: (state, action) => {
      const { name, email, password } = action.payload;
      const user = state.users.find((user) => user.email === email);
      if (user) {
        toast.error("User already exists", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        state.users.push({
          id: uuidv4(),
          name,
          email,
          password,
        });
        window.localStorage.setItem("users", JSON.stringify(state.users));
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    },

    handleLogin: async (state, action) => {
      try {
        const response = await axios.post(
          "https://05f3bd2c-040c-4d5c-a66c-64cb84d6a377.mock.pstmn.io/login/login",
          {
            uid: action.payload.userId,
            password: action.payload.password,
          }
        );

        toast.success("User logged in successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        state.isAuth = true;
        localStorage.setItem(
          "token_id",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user_data", JSON.stringify(response.data.user));
        localStorage.setItem("isAuth", "true");
        window.location.href = "/dashboard";
      } catch (error) {
        state.isAuth = false;
        toast.error("Couldn't log in!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    },

    handleLogout: (state, action) => {
      state.isAuth = false;
      window.localStorage.removeItem("isAuth");
      window.localStorage.removeItem("appConfig");
      window.localStorage.removeItem("userInfo");
      toast.error("User logged out successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      window.location.href = "/login";
    },
  },
});

export const { handleRegister, handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
