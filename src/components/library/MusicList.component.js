import * as React from "react";

import MusicCard from "./MusicCard.component";
import { useGlobalContext } from "../../context/GlobalContext";
import useAxios from "../../hooks.js/useAxios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import secureLocalStorage from "react-secure-storage";

const MusicList = () => {
  const { loggedUser, setLoggedUser } = useGlobalContext();
  const { updateUserLibrary } = useAxios();

  let loggedUserMusic = loggedUser.library.songs;
  console.log(loggedUserMusic);

  const removeSong = (songId) => {
    const userSongs = loggedUser.library.songs;
    const newUserSongs = userSongs.filter((song) => song !== songId);
    console.log(newUserSongs);
    const updatedUser = {
      ...loggedUser,
      library: { ...loggedUser.library, songs: newUserSongs },
      password: secureLocalStorage.getItem("loggedUserPassword"),
    };
    setLoggedUser(updatedUser);
    console.log(updatedUser.library.songs);
    updateUserLibrary(updatedUser);
  };
  return (
    <Box sx={{ flexGrow: 2, margin: "0 15%" }}>
      <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
        {loggedUserMusic.map((song) => {
          return (
            <MusicCard
              key={Math.random()}
              songId={song}
              onClick={() => removeSong(song)}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default MusicList;
