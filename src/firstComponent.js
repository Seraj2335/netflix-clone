
import React  from 'react';
import requests from './request';
import Row from './row';
import Banner from './banner';
import Nav from './nav';

        function FirstComponent(){
            return (
               <div className='bg-black'>
               <Nav />
               
                <Banner/>
               
                
                   <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={`https://api.themoviedb.org/3${requests.fetchNetflixOriginal}`}/>
                   <Row title="Netflix Trending" fetchUrl={`https://api.themoviedb.org/3${requests.fetchTrending}`}/>
                   <Row title="Top Rated" fetchUrl={`https://api.themoviedb.org/3${requests.fetchTopRated}`}/>
                   <Row title="Action Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchActionMovies}`}/>
                   <Row title="Comedy Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchComedyMovies}`}/>
                   <Row title="Horror Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchHorrorMovies}`}/>
                   <Row title="Romance Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchRomanceMovies}`}/>
                   <Row title="Documentaries" fetchUrl={`https://api.themoviedb.org/3${requests.fetchDocumentaries}`}/>
                   
               </div>
            );
        }
 
export default FirstComponent;
  
  
