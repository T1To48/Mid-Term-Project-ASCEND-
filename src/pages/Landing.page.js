import React from 'react'


import { Button } from "@mui/material";
import "../styles/styled/LandingPage.css"

const Landing = () => {
  return (
   <div >
   <div
     id="intro-example"
     className="p-5 text-center bg-image"
     style={{
       height: "100vh",
     }}
   >
     <div className="mask">
       <div className="d-flex justify-content-center align-items-center h-100">
         <div className="text-white">
           <h1 className="mb-3">ASCEND with Us </h1>
           <h5 className="mb-4">for a better MOOD</h5>
           <Button className="m-2" sx={{backgroundColor:"##1F0024"}} variant="contained" >
             Signup
           </Button>
           <Button variant="contained" sx={{backgroundColor:"##1F0024"}} className="m-2">
             Discover
           </Button>
         </div>
       </div>
     </div>
   </div>
 </div>
  )
}

export default Landing



