import React from 'react';
import {personal} from './data/personal';
import './css/projects.css';

function PersonalProjects(){
    return (
      <div>
        <p className='projectCategory'>Personal Projects</p>
        <div className='container'>
        {personal.map(project => 
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

export default PersonalProjects