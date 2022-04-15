
import React, { Component } from 'react';
import requests from './request';
import Row from './row';


        function FirstComponent(){
            return (
               <div>
                  
                   <Row title="Netflix Originals" fetchUrl={`https://api.themoviedb.org/3${requests.fetchNetflixOriginal}`}/>
                   <Row title="Netflix Trending" fetchUrl={`https://api.themoviedb.org/3${requests.fetchTrending}`}/>
               </div>
            );
        }
 
export default FirstComponent;
  
  
