import React from 'react'


import { useGlobalContext } from './index'

import { Button } from "@mui/material";
import "../styles/styled/LandingPage.css"

const Landing = () => {
  const{btnHoverBgColor}=useGlobalContext();
  
  return (
   <div  >
   <div
     id="intro-example"
     className="p-5 text-center bg-image"
     
   >
     <div >
       <div >
         {/* <div className="text-white"> */}
           <h1 className="mb-3">ASCEND with Us </h1>
           <h5 className="mb-4">for a better MOOD</h5>
           <Button className="m-2" sx={{...btnHoverBgColor}}   variant="contained" >
             Signup
           </Button>
           <Button variant="contained"  sx={{...btnHoverBgColor}} className="m-2">
             Discover
           </Button>
         {/* </div> */}
       </div>
     </div>
   </div>
 </div>
  )
}

export default Landing



