import React from 'react';
import '../assets/css/NavBar.css'

let menuContent = ['Home', 'Welcome', 'Link'];

export default function NavBar(props){
  let menu =  menuContent.map((item, index)=>
   <li key={index}>{item}</li>
 );
  return(
    <nav className="nav">
      <ul>
      {menu}
      </ul>    
    </nav>
  )
}
