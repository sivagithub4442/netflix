import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
  const [show,setshow] = useState(false)
  useEffect(()=>{window.addEventListener("scroll",()=>{
    if(window.scrollY>600){
      setshow(true);
    }
    else{
      setshow(false);
    }
  });}, []);
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img width={'150px'} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
    </div>
  )
}

export default Nav