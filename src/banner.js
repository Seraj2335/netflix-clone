
import axios from 'axios';
import React, { useState,useEffect} from 'react';
import requests from './request';
function Banner(){
    const [movie,setMovies]=useState([]);
    const baseUrl ='https://image.tmdb.org/t/p/original/';
   useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginal}`);
         
           setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
           return requests;
       }
     fetchData();
   },[]);

  

    return (
        <header className='px-4 py-4 mb-4  banner h-112 bg-cover bg-center z-0 ' style={{
            backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
         
          
        
        }}>
     
        
            <div className=' ml-8 md:pt-32 pt-16 h-48 absolute top-20 left-0 '>
        <h1 className='text-white  font-semibold pb-0.3 text-smr3 '>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='flex  my-4'>
            <button className=' mr-2 w-16 rounded outline-none border-none text-white  bg-background font-sans '>Play</button>
            <button className='w-16 rounded outline-none border-none text-white  bg-background font-sans e'>My List</button>
        </div>
        <p className='text-white md:w-45 w-64 md:text-base text-sm'>
           {movie?.overview}
        </p>
        </div>
      
        </header>
        );
        
   
}

export default Banner;