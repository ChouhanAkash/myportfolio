import "./Navbarstyle.css";
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaBars,FaTimes}from "react-icons/fa";
const Navbar =()=>{
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor);
    return( 
<div className={color?"header header-bg":"header"}>

      <h1> portfolio</h1>

    <ul className={click?"nav-menu active":"nav-menu"}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink  to="/About" >About</NavLink></li>
        <li><NavLink to="/Skills" >Skills</NavLink></li>
        <li><NavLink  to="/Contact" >Contact</NavLink></li>
        <li><NavLink to="/Project" >Project</NavLink></li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
        {
            click ? (<FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>
            )
        }
       

        </div></div>

    );
}
export default Navbar;