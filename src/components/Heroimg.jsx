import "./heroimg.css"
import React from "react";
import aboutpic from "../assets/aboutpic.jpg";
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {Link} from "react-router-dom";
const Heroimg= ()=>{
    const [text] = useTypewriter({
        words: ['FullStack Developer.', 'Programmer.', 'ReactDeveloper.', 'Student!.'],
        loop: {  },
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
      })
    return (
        <div className="hero">
        <div className="mask">
            <div className="content">
                <img className ="myimage" src={aboutpic} alt=""/>
                <p>HI,I'M Akash Chouhan</p>
               <h2>I' am a
               <span> {text}</span>
                <Cursor/>
                
                </h2>
                
                <div>
<Link to="/Project" className="btn">Projects</Link>
<Link to="/Contact" className=" btn btn-light">Contact</Link>
                </div>
            </div>
            </div>
            </div>
        
    )
}
export default Heroimg;