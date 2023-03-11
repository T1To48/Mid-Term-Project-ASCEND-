import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import ShuffleOnOutlinedIcon from "@mui/icons-material/ShuffleOnOutlined";

import { useState, useEffect } from "react";
import { mQuotesApi } from "../../api's";
import { useGlobalContext } from "../../context/GlobalContext";

import MQuoteItem from "./mQuoteItem.component";

const MQuotesList = () => {
  const [quotesResults, setQuotesResults] = useState(() => {
    const mQuotes = localStorage.getItem("currentQuotes");
    return mQuotes ? JSON.parse(mQuotes) : [];
  });
  const { isLoading, setIsLoading, rndmRange, localApi, btnHoverBgColor } =
    useGlobalContext();

  const getQuotes = async () => {
    setIsLoading(true);
    try {
      const response = await mQuotesApi.get(``);

      const quotesArr = response.data;
      if (quotesArr) {
        setQuotesResults(rndmRange(quotesArr));
      }
      console.log(quotesArr);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("pickle rick", quotesResults);

    localStorage.setItem("currentQuotes", JSON.stringify(quotesResults));
  }, [quotesResults]);
  useEffect(() => {
    if (localApi("get", "currentQuotes").length > 1) {
      setQuotesResults(localApi("get", "currentQuotes"));
    } else {
      getQuotes();
    }
  }, []);

  let shuffleBtnFixed = {
    position: "fixed",
    bottom: "5%",
    right: "5%",
    zIndex: 1,
    borderRadius: "20px",
    ...btnHoverBgColor,
  };

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        // onClick={()=>)}
        sx={{ ...shuffleBtnFixed }}
        onClick={getQuotes}
        disabled={isLoading}
      >
        {isLoading ? (
          "Loading..."
        ) : (
          <>
            <ShuffleOnOutlinedIcon /> &nbsp;&nbsp;SHUFFLE
          </>
        )}
      </Button>
      <Box sx={{ flexGrow: 2, textAlign: "center" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            columnGap: "25px",
            padding: "5px",
          }}
        >
          {quotesResults.map((quote) => {
            return (
              <div key={Math.random()}>
                <br />
                <MQuoteItem
                  mQuote={quote.quote}
                  author={quote.name}
                  category={quote.category}
                  quoteId={`${quote.id}`}
                />
              </div>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default MQuotesList;
