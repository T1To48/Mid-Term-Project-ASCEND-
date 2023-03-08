import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.component";
import Container from '@mui/material/Container';


const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Container fixed>
      <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
