import React from 'react';
import Navbar from "../components/Navbar";
import Heroimg2 from "../components/Heroimg2";
import Footer from "../components/Footer";
import MySkills from '../components/MySkills';
const Skills=()=>{
    return (<div>
        <Navbar/>
        <Heroimg2 heading="Skills" text="here some my skills"/>
        <MySkills/>
        <Footer/>
    </div>);
}
export default Skills;