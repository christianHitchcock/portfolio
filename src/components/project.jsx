import React  from "react";
import Navbar from "./menu";
import Footer from "./footer";
import ProjectList from "./projectlist";
import useFetch from "./useFetch";




const Project = () => {
    const {data:projects} = useFetch('https://localhost:8000/projects')

   
    return (
        <>
        <Navbar/>
        <h1>Projects</h1>
        {projects && <ProjectList projects={projects}/>}
         <Footer/>
         </>
    )  
}      

export default Project;