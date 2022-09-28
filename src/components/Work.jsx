import "./Work.css";
import React from "react";
import WorkCard from "./WorkCard";
import Workdata from "./Workdata";
const Work=()=>{
    return (<div className="workcontainer"><h1 className="project-heading">Projects</h1>
    
        <div className="project-container">
            
               {Workdata.map((val,ind) =>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                );
               })}
            </div>
        </div>);
}
export default Work;