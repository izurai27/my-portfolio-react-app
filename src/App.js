// import logo from './logo.svg';
import './css/App.css';

import Header from './header';
import Hero from './hero';
import Projects from './projects';
import Profile from './profile';
import Quote from './quotecomponent';

function App() {
  
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Quote/>
        <Projects/>
        <Profile/>
        
        
    </div>
  );
}

export default App;
