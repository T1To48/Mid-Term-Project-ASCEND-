import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

import {useState,useEffect} from 'react'
import { mQuotesApi } from '../../api\'s'
import { useGlobalContext } from '../../context/GlobalContext';

import MQuoteItem from './mQuoteItem.component';

const MQuotesList = () => {
  const [quotesResults, setQuotesResults] = useState(()=>{
    const mQuotes=localStorage.getItem("currentQuotes");
    return mQuotes?JSON.parse(mQuotes):[];
   });
  const{isLoading,setIsLoading,rndmRange}=useGlobalContext();

  const getQuotes = async () => {
     setIsLoading(true);
    try {
      const response = await mQuotesApi.get(``);

      const quotesArr = response.data;
      if (quotesArr){
        setQuotesResults(rndmRange(quotesArr))
      }
      
    } catch (error) {
      console.log(error);
    } finally {
       setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("pickle rick",quotesResults);
    
  localStorage.setItem("currentQuotes",JSON.stringify(quotesResults))

  }, [quotesResults]);
  useEffect(() => {
    getQuotes()

  }, []);
  

 
  return (
    <Box sx={{ flexGrow: 2 ,display:"flex",justifyContent:"center"}}>
      <button onClick={getQuotes} disabled={isLoading}>{isLoading?"Loading...":"Randomize"}</button>
      
   <Grid container spacing={2} sx={{ flexWrap: "wrap" ,gap:"5px"}}>
   {quotesResults.map((quote)=>{
        return <div key={Math.random()} ><br/><MQuoteItem mQuote={quote.quote} author={quote.name} category={quote.category} /></div> 
      })}
     
   </Grid>
 </Box>
    
    
  )
}

export default MQuotesList

{/* <div>
      <button onClick={getQuotes} disabled={isLoading}>{isLoading?"Loading...":"Randomize"}</button>
      <br/>
      <br/>
      <div>
      {quotesResults.map((quote)=>{
        return <div key={Math.random()} ><br/><MQuoteItem mQuote={quote.quote} author={quote.name} category={quote.category} /></div> 
      })}
    </div>
    </div> */}