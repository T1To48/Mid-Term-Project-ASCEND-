import React, { useEffect } from "react";
import { MQuotesList, SongsList } from "../components";
import useAxios from "../hooks.js/useAxios";
import { useGlobalContext } from "./index";
const Main = () => {
  const { musicSearchResult, setMusicSearchResult } = useGlobalContext();

  useEffect(() => {
    console.log(musicSearchResult);
  }, [musicSearchResult]);
  return (
    <div>{musicSearchResult.length > 1 ? <SongsList /> : <MQuotesList />}</div>
  );
};

export default Main;
