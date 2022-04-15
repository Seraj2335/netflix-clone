
import React, { useState,useEffect} from 'react';
import axios from 'axios';

function Row({title,fetchUrl,isLargeRow}){
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
       <div className=' object-contain px-5 bg-black'>
         <h1 className=' text-2xl font-bold'>{title}</h1>
         <div className='flex my-4 overflow-scroll scrollbar-hide overflow-y-hidden px-5'>
           {
             movies.map(e=>{
               return <img key={e.id} src={`${baseUrl+e.poster_path}`} alt={e.name} className={`${isLargeRow ?'mr-2.5 w-full max-h-25 ':'h-25 w-40'} transition transform hover:scale-110`}/>
             })
           }
         </div>
       </div>
    );
}

 
export default Row;
