import "./footer.css"
import React from "react"
import {Link} from "react-router-dom";
import{FaHome, FaLinkedin, FaMailBulk,FaPhone, FaInstagram,FaFacebook} from "react-icons/fa"
const Footer=()=>{
    return (
        <div className="footer">
        <div className="footer-container">
                <div className="left">
<div className="location">
    <FaHome size={30}/>
       <p> ward no-4 obedullaganj<br/>
        Madhya Pradesh India</p>
    </div>
    <div className="phone">
    <FaPhone size={30} />
   <p>6266068835 , 7477068835</p>
    </div>
    <div className="email">
   <FaMailBulk size={30} />
   <p> akashchouhan1209@gmail.com</p></div>
</div>

                <div className="right">
                    <h4>About</h4>
                    <p>This is me Akash Chouhan .Student in LNCTE College</p>
                    <div className="social-media"><a href="https://www.facebook.com/akash.chouhan.58958343"><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                  <a href="https://www.instagram.com/__akash__chouhan__patel_/"> <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href="https://www.linkedin.com/in/akash-chouhan-a06320202">< FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer