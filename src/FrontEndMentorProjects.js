import React from 'react';
import {frontendmentor} from './data/frontendmentor';
import './css/projects.css';

function FrontEndMentorProjects(){
    return (
      <div>
        <p className='projectCategory'>Project challenge from frontendmentor.io</p>
        <div className='container'>
        {frontendmentor.map(project => 
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

export default FrontEndMentorProjects