import React,{useEffect} from 'react'
import { MQuotesList,SongsList } from '../components'
import useAxios from '../hooks.js/useAxios'
import { useGlobalContext } from '../context/GlobalContext'
const Main = () => {
const{musicSearchResult, setMusicSearchResult}=useGlobalContext()

useEffect(() => {
  console.log(musicSearchResult);
}, [musicSearchResult]);
  return (
   //orng) 1.NAVbar 
   //orng) 2.quotes-cards-list (with BUTTONS)
   //orng) 3.dynamic results screen (music & recipes)
    <div>
      {musicSearchResult.length>1?<SongsList/>:<MQuotesList/>}
      
    </div>
  )
}

export default Main;