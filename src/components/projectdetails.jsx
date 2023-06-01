import React from "react";
import { useParams } from "react-router-dom";
import { FaArrowAltCircleLeft,FaGlobeAfrica } from "react-icons/fa";
import useFetch from "./useFetch";
import {useNavigate} from 'react-router-dom';
import Footer from  "./footer"


const ProjectDetails = () => {
    const history = useNavigate();

    const previousPage =() => {
        history(-1);
    }

    const projectPage = () => {
        history('/project')
    }

    const {id} = useParams();
    const {data:project} = useFetch('http://localhost:8000/projects/' + id);
    return (
        <div className="container">
            
             <div className="details-top">
            <FaArrowAltCircleLeft className="detailsIcon" onClick={previousPage}/>
            <p onClick={projectPage}>Back to Projects</p>
        </div>
           
           
        {project && <div className="detailscontent">
            <h3>{project.title}</h3>
            <p>{project.Description}</p>
            <img src={project.imgURL} alt="" />
            <h4>About</h4>
            <p>{project.about}</p>
            <h4>Website:</h4>
            <FaGlobeAfrica  className="LinkIcon"/>
            <a href={project.link}>{project.link}</a>
            </div>}
        <Footer/>
        </div>

    )
}

export default ProjectDetails;