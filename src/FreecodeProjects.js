import React from 'react';
import { freecode } from './data/freecode';
import './css/projects.css';

function FreecodeProjects(){
    return (
      <div >
        <p className='projectCategory'>Project challenge from freecodecamp.org</p>
        <div className='container'>
        {freecode.map(project => 
        <div className='projectitem' key={project.id}>
          <a url={project.link}><img className="preview" src={project.preview}></img> </a> 
          <p className='projectDesc'>{project.name}</p>
          <p className='projectDesc'>{project.description}</p>
          <p className='projectDesc'>Technology used: {project.techUsed}</p>
        </div>
        )}
        </div>
    
      </div>
      
    )
  }

export default FreecodeProjects