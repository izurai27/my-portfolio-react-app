import React from 'react';
import './css/projects.css'
import projectlist from './projectlist'

function Projects(){
    return(
      <div id="project" className='proj-wrapper'>
          <h2>WORKS /</h2>
          <div className='proj-container'>
            {projectlist.map(project => 
              <div className='projectitem' key={project.id}>
                <a href={project.link} target="_blank" rel="noreferrer"><img className="preview" src={project.preview} alt={project.name}/></a> 
              </div>
            )}
          </div>
        
      </div>
    )
}


export default Projects