import "./AboutContent.css";
import React from "react";
import aboutpic from "../assets/aboutpic.jpg";
const AboutContent=()=>{
    return(
        <div className="Contentbox">
<div className="intro">
<img src={aboutpic} className="introimg" alt="aboutpic"/>
<div className="aboutintro">
    <h4>My name is Akash Chouhan. I'm an Btech student at LNCTE college in Computer Science Department .  I was born and raised in Obedullaganj .
        I did my Higher Studies from Chanakya Public School Obedullaganj  .
        Then I have done one month Internship in Web Development from Internshala.
        I like to learn new things about cultures, farming .
    </h4>
</div>
</div>
<div className="Educationbox">
    <h1>Academic Background</h1>
    <div className="boxeslayout">
    <div className="boxes">
        <h2>Bachelor of technology</h2>
        <div className="boxescontent">
<p>Btech in computer science and engineering at <br/>
LNCTE College Bhopal in (2020-2024).
</p>
<h4>Afilliated by-</h4>
<p>Rajiv Gandhi Proudyogiki Vishwavidhyalaya ,Bhopal<br/>(RGPV University).</p>
<h4>CGPA-7.38</h4>
        </div>
    </div>

    <div className="boxes">
        <h2>Higher Education</h2>
        <div className="boxescontent">
<p>Chanakya Public Higher Secondary School <br/>
Obedullaganj (M.P) in (2019-2020).
</p>
<h4>Board of passing-</h4>
<p>MPBSE Bhopal (M.P)</p>
<h4>Percentage-65%</h4>
        </div>
    </div>
    <div className="boxes">
        <h2>High Education</h2>
        <div className="boxescontent">
<p>Chanakya Public Higher Secondary School <br/>
Obedullaganj (M.P) in (2016-2017).
</p>
<h4>Board of passing-</h4>
<p>MPBSE Bhopal (M.P)</p>
<h4>Percentage-82%</h4>
        </div>
    </div>
</div>
</div>
<div className="experience">

    
</div>
        </div>
    );



    
}
export default AboutContent;