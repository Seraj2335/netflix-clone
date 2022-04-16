import React, { Component, useEffect, useState } from 'react';




function Nav(){
//   const[show,handleShow]=useState(false);
//     useEffect(()=>{
//         window.addEventListener('scroll',()=>{
//             if(window.scrollY>100)
//             handleShow(true);
//             else
//             handleShow(false);
//         });
//         return ()=>{
//             window.removeEventListener('scroll');
//         }
//     },[]);

    return (
        <div className=' bg-black nav flex justify-between h-8 z-1 pt-2'>
        <img className='nav_logo w-20 object-contain fixed'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt='Netflix Logo'
        />
        <img className='nav_logo w-8 object-contain right-4 fixed'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='Netflix Logo'
        />

        </div>
    );
}
 
export default Nav;