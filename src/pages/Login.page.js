import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import secureLocalStorage from "react-secure-storage"

import { usersDataApi } from "../api's";
import { useGlobalContext } from "./index";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
const {isLoading,setIsLoading,loggedUser, setLoggedUser,localApi}=useGlobalContext();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginDetails;
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);


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
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className=" text-white my-5 mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "400px",
              backgroundColor: "rgba(13, 14, 18, 0.90)"
            }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center  mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your Email and Password
              </p>
              <form onSubmit={handleLogin}>
              <MDBInput
                wrapperClass="mb-4  w-100"
                labelClass="text-white"
                label="Email address"
                type="email"
                size="lg"
           value={loginDetails.email}
           name="email"
           onChange={handleChange}
           required
                contrast
                onFocus={(e) => (e.target.style.backgroundColor = "#1fb75c")}
                onBlur={(e) => (e.target.style.backgroundColor = "#242529")}
                
              />
              <MDBInput
                wrapperClass="mb-4  w-100"
                labelClass="text-white"
                label="Password"
                type="password"
                size="lg"
               value={loginDetails.password}
               name="password"
               onChange={handleChange}
               required
                contrast
                onFocus={(e) => (e.target.style.backgroundColor = "#1fb75c")}
                onBlur={(e) => (e.target.style.backgroundColor = "#242529")}
                style={{ Border: "red" }}
              />

              <p className="small mb-3 pb-lg-2">
                <a
                  class="text-white-50"
                  href="#!"
                  onMouseEnter={(e) => (e.target.style.color = "#1fb75c")}
                  onMouseLeave={(e) => (e.target.style.color = "#8a9294")}
                >
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                outline
                className=" px-5 text-white"
                color="white"
                size="lg"
                type="submit"
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1fb75c")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#242529")
                }
              >
                Login
              </MDBBtn>

              <br />

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="text-white-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;

