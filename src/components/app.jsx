import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";


function App (){
    return(
        <div>
          <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export  default App