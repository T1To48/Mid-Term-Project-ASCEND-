import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import secureLocalStorage from "react-secure-storage"

import { usersDataApi } from "../api's";
import { useGlobalContext } from "../context/GlobalContext";
const Login = () => {
const {isLoading,setIsLoading,loggedUser, setLoggedUser,localApi}=useGlobalContext();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginDetails;
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  // const [loggedUser, setLoggedUser] = useState(()=>{
  //  const isLogged=localStorage.getItem("loggedUser");
  //  return isLogged?JSON.parse(isLogged):[];
  // });
  //orng\   const [emailError, setEmailError] = useState(false);
  //orng\   const [passwordError, setPasswordError] = useState(false);

  const navigate=useNavigate();
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await usersDataApi.get(`?email=${email}`);

      const responseUsers =
       await response.data.length > 0 ? response.data[0] : alert("Incorrect Email");

      if (responseUsers) {
        if (password === responseUsers.password) {
          secureLocalStorage.setItem("loggedUserPassword",responseUsers.password)
          // localApi ("set", "loggedUser", {...responseUsers,password:"****"})
          setLoggedUser({...responseUsers,password:"****"})
          setTimeout(()=>navigate("/"),0)
          
        } else {
          alert("Incorrect Password");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(loggedUser);
    localStorage.setItem("loggedUser",JSON.stringify(loggedUser))
  }, [loggedUser]);


  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={loginDetails.email}
          name="email"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={loginDetails.password}
          name="password"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit" value="Submit" disabled={isLoading}>
          {isLoading ? "loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
