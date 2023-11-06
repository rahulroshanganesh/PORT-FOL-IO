import React from 'react';
import './App.css';

/*COMPONENETS*/ 
import Navbar from './Navbar';
import Header from './Header';
import Project_work from './Project_work';
import Achievement from './Achievement';
import CourseCertificates from './CourseCertificates';
import Footbar from './Footbar';


function App() {

  return (
    <div className="App">
        <Navbar />
        <section id="Header">
          <Header />
        </section>
        <section id="Project_work">
          <Project_work />
        </section>
        <section id="Achievement">
          <br />
          <Achievement />
        </section>
        <section id="Certificates">
          <CourseCertificates />
        </section>
          <Footbar />
    </div>
  );
}

export default App;