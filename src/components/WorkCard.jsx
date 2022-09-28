import "./Work.css";
import React from "react";
import {NavLink}from "react-router-dom";
const WorkCard=(props)=>{
    return ( 
            <div className="project-card">
                <img src={props.imgsrc} alt="image"/>
                <h2 className="project-tittle">{props.title}</h2>
                <div className="pro-detail">
                    <p>{props.text} </p>
                    <div className="pro-btns">
                        <NavLink to="{props.view}" className="btn">view</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        );
    
}
export default WorkCard;