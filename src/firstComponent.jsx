
import React, { Component } from 'react';
import Ui from './ui';


class FirstComponent extends Component {

    state={
       count:10,
        isLoading:true,
        item:{}
    };

    
   async componentDidMount(){

    const response = await fetch(`https://api.themoviedb.org/3${fetchTrending}`);

     const jsonData= await response.json();
     this.setState({
         item:jsonData.data,
         isLoading:false
       
     });
  console.log(this.item['genres']);
    
 }


    render() { 
        return (
            <div>
                {
                    
                       <Ui/>
                }
           
            </div>
        );
    }
}
 
export default FirstComponent;
  
  
