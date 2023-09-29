import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='nav' class="topnav" >
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About</Link>
        <Link to="/Contact" className='nav-item'>Contact</Link>
      </nav>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about-me" element={<AboutMe/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
