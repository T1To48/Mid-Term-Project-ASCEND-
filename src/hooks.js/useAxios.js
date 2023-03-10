import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { usersDataApi } from "../api's";
const useAxios=()=> {
  const {musicSearchResult,setMusicSearchResult,localApi} = useGlobalContext();

  const getSongs = (category) => {
    console.log("category",category)
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: category,
        type: "tracks",
        offset: `${Math.floor(Math.random()*20)}`,
        limit: "7",
        numberOfTopResults: "3"
      },
      headers: {
        "X-RapidAPI-Key": "cefa1a67f2msh96ef31d616aedf8p1e8134jsnfd3ebb1e5c3f",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
      }
    };
     axios
      .request(options)
      .then((response) => {
        console.log(response)
        const ids = response.data.tracks.items.map((track) => {
          return track.data.id;
        });
        setMusicSearchResult(ids);
        console.log("SPOTIFY SEARCH RESULTS",response.data)
      })
      .catch(function (error) {
        console.error("SPOTIFY SEARCH ERROR",error);
      });
  };


  const updateUserLibrary=async(toUpdate)=>{
    
    try{
      const response=await usersDataApi.put(toUpdate.id,toUpdate);
      const responseUser =
        Object.keys(response.data).length > 1 ? response.data : console.log(response);
      console.log("$$$$$$$$$",response)
      const userObjHiddenPass ={...responseUser,password:"****"}
        localApi("set", "loggedUser", userObjHiddenPass);
    }
    catch(error){
      console.log(error)
    }
  }
   

  return {
   getSongs,
   updateUserLibrary
  }
}

export default useAxios;
