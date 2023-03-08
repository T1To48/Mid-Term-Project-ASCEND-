import React from 'react'

import { useGlobalContext } from '../../context/GlobalContext';

import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const MusicCard = ({songId,onClick}) => {
  
  return (
   <Grid>
   <div style={{ position: "relative" }}>
     <Button
       style={{
         background: "transparent",
         color: "white",
         overFlow: "hidden",
         whiteSpace: "nowrap",
         textOverflow: "ellipsis",
         position: "absolute",
         left: 246,
         zIndex: 1,
         border: "black 1px ",
       }}
       onClick={onClick}
     >
      <DeleteIcon sx={{borderRadius: "15px",background: "white", color:"red",padding:"2px" }}/>
     </Button>
     <iframe
       title={`Song `}
       style={{ borderRadius: "12px", zIndex: 0 }}
       src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator`}
       width="auto"
       height="100"
       frameBorder="0"
       allowFullScreen=""
       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
       loading="lazy"
     />
   </div>
 </Grid>
  )
}

export default MusicCard