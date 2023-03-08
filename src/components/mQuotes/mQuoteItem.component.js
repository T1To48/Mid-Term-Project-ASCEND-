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
const MQuoteItem = ({ mQuote, author,category}) => {
  const randomNum = Math.floor(Math.random() * 1000) + 1;
   const imgUrl =`https://source.unsplash.com/featured/?nature&sig=${randomNum}`;

  const { isLoading } = useGlobalContext();
  const{getSongs,loggedUser}=useAxios();
  return (
    <Grid>
    <Card
          sx={{
            width: 300,
            height:300,
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "345px 400px"
          }}
        >
          <CardContent>
            <br />
            <Typography backgroundColor="#E9F8F9" sx={{opacity:"0.6",color:"#181823" }} fontWeight="900" variant="body2" color="white">
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

