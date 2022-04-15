
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
        <header className='px-4 py-4 mb-4  banner h-112 bg-cover bg-center ' style={{
            backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
         
          
        
        }}>
        <div >
            {/* <img  src={`${baseUrl}${movie?.backdrop_path}`} alt="header image" className=''/> */}
            <div className='  ml-8 pt-12  h-32 absolute top-20 left-0 '>
        <h1 className='text-white  font-semibold pb-0.3 text-3'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='flex '>
            <button className='text-white'>Play</button>
            <button>My List</button>

        </div>
        <p className='text-white'>
           {movie?.overview}
        </p>
        </div>
        </div>
        </header>
        );
        
   
}

export default Banner;