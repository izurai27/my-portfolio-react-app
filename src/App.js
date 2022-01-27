// import logo from './logo.svg';
import './css/App.css';
import FreecodeProjects from './FreecodeProjects';
import PersonalProjects from './PersonalProjects';
import FrontEndMentorProjects from './FrontEndMentorProjects';
import Header from './header';
import Hero from './hero';

function App() {
  
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <div id="project">
          <FreecodeProjects/>
          <FrontEndMentorProjects/>
          <PersonalProjects/>
        </div>
        
        
    </div>
  );
}

export default App;
