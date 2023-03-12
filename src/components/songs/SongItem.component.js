import React, { useEffect, useState } from "react";

import { useGlobalContext } from "../../context/GlobalContext";

import Button from "@mui/material/Button";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import ListItem from "@mui/material/ListItem";

const SongItem = ({ songTitle, songId, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { btnHoverBgColor } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <ListItem disablePadding>
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
        &nbsp;
        <Button
          onClick={onClick}
          sx={{
            ...btnHoverBgColor,
            borderRadius: "50%",
            width: "auto",
            height: "60px",
          }}
          color="primary"
        >
          <AddCircleOutlinedIcon sx={{width: "auto",
            height: "40px",
          }} />
        </Button>
      </ListItem>
    </div>
  );
};

export default SongItem;
