import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.component";
import Container from '@mui/material/Container';


const SharedLayout = () => {
  return (
    <><Container fixed>
      <Navbar  />
      
        {/* <div  style={{display:"flex",justifyContent:"center",marginLeft:"10%"}}> */}
          <Outlet />
        {/* </div> */}
      
      </Container>
    </>
  );
};

export default SharedLayout;
