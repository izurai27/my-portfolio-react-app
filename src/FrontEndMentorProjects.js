import React from 'react';
import {frontendmentor} from './data/frontendmentor';
import './css/projects.css';

function FrontEndMentorProjects(){
    return (
      <div>
        {frontendmentor.map(project => 
        <div key={project.id}>
        <a url={project.link}><img src={project.preview}></img> </a> 
        <p>Project Name : {project.name}</p>
        <p>Project Description:{project.description}</p>
        <p>Technology used: {project.techUsed}</p>
        
        </div>
        )}
        
      </div>
    )
  }

export default FrontEndMentorProjects