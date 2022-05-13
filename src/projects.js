import React from 'react';
import './css/projects.css'
import projectlist from './projectlist'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './images/iR-logos_transparent.png'

function Projects(){
    return(
      <div id="project" className='proj-wrapper'>
          <h2>WORKS <img className='logo' src={logo} alt="logo" /></h2>
          <div className='proj-container'>
            {projectlist.map(project => 
              <div className='projectitem' key={project.id} style={{backgroundColor:project.color}}>
                <div className="projectDesc" style={{color:project.fontcolor}}>
                  <div className="title">{project.name}</div>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer"><button style={{backgroundColor:project.buttoncolor,borderColor:project.buttoncolor, borderStyle:'solid',borderWidth:'1px'}}>Visit Website</button></a> 

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