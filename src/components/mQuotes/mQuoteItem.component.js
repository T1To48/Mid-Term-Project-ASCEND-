import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { useGlobalContext } from "../../context/GlobalContext";
import useAxios from "../../hooks.js/useAxios";
import { Grid } from "@mui/material";
const MQuoteItem = ({ mQuote, author,category,quoteId}) => {
  const { isLoading } = useGlobalContext();
  const{getSongs,loggedUser}=useAxios();
  

//  let generatedNums=[];
//   const generateNums=()=>{
//     let randomNum1= Math.floor(Math.random() * 500) + 1;
//     generatedNums.push(randomNum1)
//     if(generatedNums.includes(randomNum1)){
//       console.log("inclides",randomNum1)
//       randomNum1=Math.floor(Math.random() * 800) + 501;
//       randomNum1=generatedNums.includes(randomNum1)? Math.floor(Math.random() * 1000) + 801:randomNum1;
//       generatedNums.push(randomNum1)
//     }
//     return `https://source.unsplash.com/featured/?nature&sig=${randomNum1}`;
//   }
 
  
    
  
  return (
    <Grid>
      
    <Card
          sx={{
            width: 300,
            height:300,
            backgroundImage: `url(https://source.unsplash.com/featured/?nature&sig=${quoteId})`,
            backgroundSize: "345px 400px",
            
          }}
        >
          
    {/* <Card
          sx={{
            width: 300,
            height:300,
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "345px 400px"
          }}
        > */}
        <div  style={{
      width: 300,
      height:300,
      backgroundColor: `rgba(0, 0, 0, 0.5)`,
      backgroundSize: "345px 400px",
    }}>
          <CardContent  sx={{height:"250px"}}>
            
            <Typography  sx={{opacity:"0.8",color:"white",marginTop:"5px" }} fontWeight="900" variant="body2" color="white">
           {mQuote}
            </Typography>
            <Typography
              sx={{
                color: "#E9F8F9",
                width: "fit-content",
                paddingTop: "3px",
                opacity: "0.7",
                borderRadius: "40px"
              }}
              size="small"
              gutterBottom
              fontWeight="900"
              variant="h6"
              component="div"
            >
              {author} 
            </Typography>
          </CardContent>
          <CardActions sx={{display:"flex",justifyContent:"space-evenly"}}>
            <Button
              sx={{ backgroundColor: "#537FE7" }}
              variant="contained"
              size="small"
              // onClick={()=>)}
            >
              <LibraryAddOutlinedIcon /> 
            </Button>
            <Button
              sx={{ backgroundColor: "#537FE7" }}
              variant="contained"
              size="small"
              onClick={()=>getSongs(`${category}`)}
            >
              <SearchOutlinedIcon /> Music
            </Button>
          </CardActions>
          </div>
        </Card>
        </Grid>
  );
};

export default MQuoteItem;
{/* <div>
      <button value="addToLibrary" disabled={isLoading}>
        add to My Quotes
      </button>
      <div></div>
      <h5></h5>
       <button value="findSong" onClick={()=>getSongs(`${category}`)} disabled={isLoading}>
        Find Song
      </button> 
      
    </div> */}

