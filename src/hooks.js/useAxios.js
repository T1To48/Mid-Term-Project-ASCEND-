import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { usersDataApi } from "../api's";

const useAxios=()=> {
  const {musicSearchResult,setMusicSearchResult,localApi,setIsUserInDataBase} = useGlobalContext();


  const getSongs = (category) => {
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
        "X-RapidAPI-Key": "76ec758f96msh91f1b342af0b0e3p17a99djsn07bd79fa597b",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
      }
    };
     axios
      .request(options)
      .then((response) => {
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
      const userObjHiddenPass ={...responseUser,password:"****"}
        localApi("set", "loggedUser", userObjHiddenPass);
    }
    catch(error){
      console.log(error)
    }
  }
   const isUserInDb=async(eemail)=>{
    try {
      const response = await usersDataApi.get(`?email=${eemail}`);
      const user=response.data[0] 
      if (user &&user.email===eemail) {
        setIsUserInDataBase(true)
      }else{
        setIsUserInDataBase(false)
      }
    } catch (error) {
      console.log(error);
    } 
   }

  return {
   getSongs,
   updateUserLibrary,
   isUserInDb
  }
}

export default useAxios;








//_spotify "X-RapidAPI-Key": "cefa1a67f2msh96ef31d616aedf8p1e8134jsnfd3ebb1e5c3f"