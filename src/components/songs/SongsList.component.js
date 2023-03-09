import * as React from "react";
import {useEffect} from "react"
import useAxios from "../../hooks.js/useAxios";
import SongItem from "./SongItem.component";

import secureLocalStorage from "react-secure-storage"


import Box from "@mui/material/Box";
import { useGlobalContext } from "../../context/GlobalContext";

const songs = [
  { id: "63T7DJ1AFDD6Bn8VzG6JE8", title: "Song Title 1" },
  { id: "5MxNLUsfh7uzROypsoO5qe", title: "Song Title 2" },
  { id: "1Cv1YLb4q0RzL6pybtaMLo", title: "Song Title 3" },
  { id: "2takcwOaAZWiXQijPHIx7B", title: "Song Title 4" },
  { id: "5itOtNx0WxtJmi1TQ3RuRd", title: "Song Title 5" },
];

const SongsList = () => {
  const { localApi, loggedUser, setLoggedUser,musicSearchResult,setMusicSearchResult } = useGlobalContext();
  const {updateUserLibrary}=useAxios()


  const addSong = (songId) => {
    
   const selectedSong = musicSearchResult.find((id) => songId === id);

   const updatedUser={...loggedUser,password:secureLocalStorage.getItem("loggedUserPassword")}
   console.log(updatedUser)
   if(!updatedUser.library.songs.includes(selectedSong)){
    updatedUser.library.songs.push(selectedSong);   
    updateUserLibrary(updatedUser);
   }
   else{
    alert("already in your library")
   }
  };

  
  

  return (
    <Box sx={{ width: "100%", maxWidth: "90%", bgcolor: "background.paper" }}>
      <button onClick={()=>setMusicSearchResult([])}>BACK to Quotes</button>
      {musicSearchResult.map((songId) => (
        <SongItem
          songTitle={songId}
          songId={songId}
          key={songId}
          onClick={() => addSong(songId)}
        />
      ))}
    </Box>
  );
};

export default SongsList;
