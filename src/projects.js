import React from 'react';
import './css/projects.css'
import FreecodeProjects from './FreecodeProjects';
import PersonalProjects from './PersonalProjects';
import FrontEndMentorProjects from './FrontEndMentorProjects';

function Projects(){
    return(
        <div id="project">
          <FreecodeProjects/>
          <FrontEndMentorProjects/>
          <PersonalProjects/>
        </div>
    )
}


export default Projects