import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import { usersDataApi } from "../api's";
import useAxios from "../hooks.js/useAxios";
import { useGlobalContext } from "../context/GlobalContext";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const Signup = () => {
  const navigate=useNavigate();
  const {isUserInDb}=useAxios();
  const {isUserInDataBase,setIsUserInDataBase}=useGlobalContext();
  const [signupResults, setSignupResults] = useState(null);
  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    library: {
      quotes: [],
      songs: [],
      recipes: [],
    },
  });

  const handleChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    isUserInDb(signupDetails.email)
   
      if(isUserInDataBase){
      alert("User already exists")
    }else{
      try {
        await usersDataApi.post("", signupDetails);
        navigate("/login")
      } catch (error) {
        console.log(error);
      }
    }
    

  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className=" text-white my-5 mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "400px",
              backgroundColor: "rgba(13, 14, 18, 0.90)",
            }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center  mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">signup</h2>
              <br />
              <form onSubmit={handleSignup}>
                <MDBInput
                  wrapperClass="mb-4  w-100"
                  labelClass="text-white"
                  label="Name"
                  type="text"
                  size="lg"
                  name="name"
                  onChange={handleChange}
                  required
                  contrast
                  onFocus={(e) => (e.target.style.backgroundColor = "#1fb75c")}
                  onBlur={(e) => (e.target.style.backgroundColor = "#242529")}
                />
                <MDBInput
                  wrapperClass="mb-4  w-100"
                  labelClass="text-white"
                  label="Email Address"
                  type="email"
                  size="lg"
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
                  name="password"
                  onChange={handleChange}
                  required
                  contrast
                  onFocus={(e) => (e.target.style.backgroundColor = "#1fb75c")}
                  onBlur={(e) => (e.target.style.backgroundColor = "#242529")}
                />
                &nbsp;{" "}
                <MDBBtn
                  outline
                  className=" px-5 m-4  text-white"
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
                  Sign Up
                </MDBBtn>
                <br />
                <div>
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-white-50 fw-bold">Login</span>
                    </Link>
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

export default Signup;
