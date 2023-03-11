import * as React from "react";
import useAxios from "../../hooks.js/useAxios";

import { useGlobalContext } from "../../context/GlobalContext";
import secureLocalStorage from "react-secure-storage";

import SongItem from "./SongItem.component";

import Button from "@mui/material/Button";
import LowPriorityOutlinedIcon from "@mui/icons-material/LowPriorityOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const SongsList = () => {
  const {
    localApi,
    loggedUser,
    setLoggedUser,
    musicSearchResult,
    setMusicSearchResult,
    btnHoverBgColor,
  } = useGlobalContext();
  const { updateUserLibrary } = useAxios();

  const addSong = (songId) => {
    const selectedSong = musicSearchResult.find((id) => songId === id);

    const updatedUser = {
      ...loggedUser,
      password: secureLocalStorage.getItem("loggedUserPassword"),
    };
    console.log(updatedUser);
    if (!updatedUser.library.songs.includes(selectedSong)) {
      updatedUser.library.songs.push(selectedSong);
      updateUserLibrary(updatedUser);
    } else {
      alert("already in your library");
    }
  };

  let returnToQuotesBtnFixed = {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex: 1,
    borderRadius: "20px",
    ...btnHoverBgColor,
  };

  return (
    <Box sx={{ width: "100%", paddingTop: "2%", marginLeft: "10%" }}>
      <Button
        variant="contained"
        size="medium"
        sx={{ ...returnToQuotesBtnFixed }}
        onClick={() => setMusicSearchResult([])}
      >
        <LowPriorityOutlinedIcon />
        &nbsp; to Quotes
      </Button>

      {musicSearchResult.map((songId) => (
        <Container fixed>
          <SongItem
            songTitle={songId}
            songId={songId}
            key={songId}
            onClick={() => addSong(songId)}
          />
        </Container>
      ))}
    </Box>
  );
};

export default SongsList;
