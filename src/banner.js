
import axios from 'axios';
import React, { useState,useEffect} from 'react';
import requests from './request';
function Banner(){
    const [movie,setMovies]=useState([]);
    const baseUrl ='https://image.tmdb.org/t/p/original/';
   useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(`${baseUrl}+${requests.fetchNetflixOriginal}`);
          console.log(request.data.results+ 'Your Result')
           setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
           return requests;
       }
     fetchData();
   },[]);

  console.log( 'Movies Details'+movie);

    return <header>
        <h1>Title</h1>
        <div className='flex'>
            <button>Play</button>
            <button>Log in</button>

        </div>
        <p>
            Decsription
        </p>
    </header>
}
 
export default Banner;