
import React, { useState,useEffect} from 'react';
import axios from 'axios';

function Row({title,fetchUrl}){
  const[movies,setMovies]=useState([]);
 const baseUrl ='https://image.tmdb.org/t/p/original/';
      useEffect(()=>{
     async function fetchData(){
       const request = await axios.get(fetchUrl);
       setMovies(request.data.results)
       console.log(request.data.results)
         return request;
     }
     fetchData();
      },[fetchUrl]);


    
    return (
       <div className='w-full object-contain'>
         <h1 className='text-smr3 text-2xl font-semibold'>{title}</h1>
         <div className='flex mt-2 overflow-scroll  overflow-y-hidden '>
           {
             movies.map(e=>{
               return <img  src={`${baseUrl+e.poster_path}`} alt={e.name} className="h-25 transition transform hover:scale-105"/>
             })
           }
         </div>
       </div>
    );
}

 
export default Row;
