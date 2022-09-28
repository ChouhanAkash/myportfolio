import React from "react";
import "./App.css";
import "./index.css";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Project from "./routes/Project"
import Skills from "./routes/Skills"
import {Routes,Route}from 'react-router-dom'

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Project" element={<Project/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Skills" element={<Skills/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes>

</>

  );

}

export default App;
