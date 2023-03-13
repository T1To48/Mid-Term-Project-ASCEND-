import React from "react";
import { MQuotesList, SongsList } from "../components";
import { useGlobalContext } from "./index";
const Main = () => {
  const { musicSearchResult } = useGlobalContext();

  return (
    <div>{musicSearchResult.length > 1 ? <SongsList /> : <MQuotesList />}</div>
  );
};

export default Main;
