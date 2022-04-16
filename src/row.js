
import React, { useState,useEffect} from 'react';
import axios from 'axios';

function Row({title,fetchUrl,isLargeRow}){
  const[movies,setMovies]=useState([]);
 const baseUrl ='https://image.tmdb.org/t/p/original/';
      useEffect(()=>{
     async function fetchData(){
       const request = await axios.get(fetchUrl);
       setMovies(request.data.results)
      
         return request;
     }
     fetchData();
      },[fetchUrl]);


    
    return (
      <div className='  px-5 bg-black my-auto '>
      <h1 className=' text-xl font-semibold text-white'>{title}</h1>
      <div className='flex py-4  px-5  overflow-x-auto scrollbar-hide overflow-y-hidden '>
        {
          movies.map(e=>{
            return  <img key={e.id} src={`${baseUrl+e.poster_path}`} alt={e.name} 
            className={`${isLargeRow ?'  md:max-h-84 max-h-64 transition transform hover:scale-110':'max-h-32 max-w-xs '} transition transform hover:scale-105  mr-2.5`}/> 
          })
        }
      </div>
    </div>
    );
}

 
export default Row;




