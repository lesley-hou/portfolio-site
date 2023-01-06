import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import MadeWith from './Components/MadeWith';
import MobileNavbar from './Components/MobileNavbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Sidebar className="sidebar"/>
          <MadeWith/>
          <div className="content">
            <Routes>
              <Route exact path="/" element={ <About className="content"/> } />
              <Route exact path="/projects" element={ <Projects className="content" />} />
              <Route exact path="/contact" element={ <Contact className="content" />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;