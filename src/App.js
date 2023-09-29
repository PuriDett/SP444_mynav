import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav' class="topnav" >
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About</Link>
        <Link to="/Contact" className='nav-item'>Contact</Link>
        <Link to="/edu" className='nav-item'>Education</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about-me" element={<AboutMe/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/edu" element={<Education/>}/>
      </Routes>
    </div>
  );
}

export default App;
