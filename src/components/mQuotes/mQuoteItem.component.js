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
  const { isLoading,btnHoverBgColor } = useGlobalContext();
  const{getSongs,loggedUser}=useAxios();
  
  
  return (
    <Grid >
      
    <Card
          sx={{
            width: 300,
            height:300,
            backgroundImage: `url(https://source.unsplash.com/featured/?nature&sig=${quoteId})`,
            backgroundSize: "345px 400px",
            borderRadius: "20px"

            
          }}
        >
          
  
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
              
              variant="contained"
              size="small"
              // onClick={()=>)}
    
              sx={{...btnHoverBgColor,borderRadius: "20px"}}

            >
              <LibraryAddOutlinedIcon /> 
            </Button>
            <Button
              
              variant="contained"
              size="small"
              onClick={()=>getSongs(`${category}`)}
              sx={{...btnHoverBgColor,borderRadius: "20px",}}
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


