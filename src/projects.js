import React from 'react';
import './css/projects.css'
import projectlist from './projectlist'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Projects(){
    return(
      <div id="project" className='proj-wrapper'>
          <h2>WORKS /</h2>
          <div className='proj-container'>
            {projectlist.map(project => 
              <div className='projectitem' key={project.id} style={{backgroundColor:project.color}}>
                <div className="projectDesc" style={{color:project.fontcolor}}>
                  <div className="title">{project.name}</div>
                  <div>{project.description}</div>
                  <a href={project.link} target="_blank" rel="noreferrer">Link</a> 

                </div>
                <div className="imgcontainer">
                  <img className="preview" src={project.preview} alt={project.name}/>
                  {/* {project.techUsed.map(tech => 
                    <img className='logos' src={tech} alt='tech logo' style={{width:'20px',height:'auto'}}/>
                  )} */}
                </div>
              </div>
            )}
          </div>
        
      </div>
    )
}


export default Projects