import React from 'react';
import { freecode } from './data/freecode';

function FreecodeProjects(){
    return (
      <div>
        {freecode.map(project => 
        <div key={project.id}>
        <a url={project.link}><img className="preview" src={project.preview}></img> </a> 
        <p>Project Name : {project.name}</p>
        <p>Project Description:{project.description}</p>
        <p>Technology used: {project.techUsed}</p>
        
        </div>
        )}
        
      </div>
    )
  }

export default FreecodeProjects