import React, { useEffect, useState } from "react";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
const SongItem = ({ songTitle, songId, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <ListItem disablePadding style={{ margin: "0 10%" }}>
        <IconButton onClick={onClick} sx={{ float: "right" }} color="primary">
          <AddIcon />
        </IconButton>
        {isLoading ? (
          "Loading..."
        ) : (
          <iframe
            title={`Song ${songTitle}`}
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/track/${songId}?utm_source=generator`}
            width="80%"
            height="170"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        )}
      </ListItem>
    </div>
  );
};

export default SongItem;
