// import logo from './logo.svg';
import './css/App.css';

// import Header from './header';
import Hero from './hero';
import Projects from './projects';
import Profile from './profile';
import Quote from './quotecomponent';
import Footer from './footer';

function App() {
  
  return (
    <div className="App">
        {/* <Header/> */}
        <Hero/>
        <Quote/>
        <Projects/>
        <Profile/>
        <Footer/>
        
        
    </div>
  );
}

export default App;
