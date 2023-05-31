import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Project from "./project";
import ProjectDetails from "./projectdetails";


function App (){
    return(
        <div>
          <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/project/:id" element={<ProjectDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export  default App