import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Grid from "@mui/material/Unstable_Grid2";

import { useGlobalContext } from "../../context/GlobalContext";
const MyQuoteCard = () => {
   const randomNum = Math.floor(Math.random() * 1000) + 1;
   const imgUrl = `https://source.unsplash.com/featured/?nature&sig=${randomNum}`;
 
   return (
      <>
        <Card
          sx={{
            maxWidth: 345,
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "345px 300px"
          }}
        >
          <CardContent>
            <br />
            <Typography fontWeight="900" variant="body2" color="white">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
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
              variant="h5"
              component="div"
            >
              Einstein
            </Typography>
          </CardContent>
          <CardActions sx={{display:"flex",justifyContent:"space-evenly"}}>
            <Button
              sx={{ backgroundColor: "#537FE7" }}
              variant="contained"
              size="small"
            >
              <LibraryAddOutlinedIcon /> 
            </Button>
            <Button
              sx={{ backgroundColor: "#537FE7" }}
              variant="contained"
              size="small"
            >
              <SearchOutlinedIcon /> Music
            </Button>
          </CardActions>
        </Card>
      </>
    );
}

export default MyQuoteCard