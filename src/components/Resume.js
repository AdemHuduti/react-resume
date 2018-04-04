import React from 'react';
import About from './About';
import Navigation from './Navigation';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';

import '../App.css';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Interests />
        <Awards />          
      </div>
    );
  }
}

export default Resume;