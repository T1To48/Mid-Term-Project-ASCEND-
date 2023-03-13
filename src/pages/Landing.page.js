import React from "react";
import { Link } from "react-router-dom";

import { useGlobalContext } from "./index";

import { Button } from "@mui/material";
import "../styles/styled/LandingPage.css";

const Landing = () => {
  const { btnHoverBgColor } = useGlobalContext();

  return (
    <div>
      <div id="intro-example" className="p-5 text-center bg-image">
        <div>
          <div style={{ color: "rgba(13, 14, 18, 0.90)" }}>
            <h1 className="mb-8" style={{ fontWeight: "900" }}>
              ASCEND with Us{" "}
            </h1>
            <h4 className="mb-4" style={{ fontWeight: "600" }}>
              Get your daily dose of inspiration and <b>ASCEND</b>  to greatness.
            </h4>
            <Link to="/signup">
              {" "}
              <Button
                className="m-2"
                sx={{ ...btnHoverBgColor, borderRadius: "20px",fontWeight: "600" }}
                size="large"
                variant="contained"
              >
                Signup
              </Button>
            </Link>{" "}
            &nbsp;&nbsp;&nbsp;
            <Link to="/">
              {" "}
              <Button
                variant="contained"
                sx={{ ...btnHoverBgColor, borderRadius: "20px",fontWeight: "600" }}
                size="large"
                className="m-2"
              >
                Discover
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
