import endpoints from '@/Api'
import useFetch from '@/Hooks/useFetch'
import React, { createContext, useEffect, useState } from 'react'

export const Search=createContext()
export  default function Searchprovider({children}) {
    const [gifsToShow,setGifsToShow]=useState([])
    const [endpoint,setEndpoint]=useState(endpoints.trending)


   function sendEndpoint(searchword){
      if (searchword.length>2){
         setEndpoint(`${endpoints.search}${searchword}&limit=15&offset=0&rating=g&bundle=messaging_non_clips`)
      } else {
         setEndpoint(endpoints.trending)
      }
   }
   

   useEffect(()=>{
      async function test(){
         const data= await useFetch(endpoint)    
      setGifsToShow(data)
      }
      
      test()
      
   },[endpoint])

   return (
     <Search.Provider
        value={{
            gifsToShow,
            setEndpoint,
            sendEndpoint,
        }}
     >
        {children}
     </Search.Provider>
   )
 }
 