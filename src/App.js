import logo from './logo.svg';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import './components/About';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Education from './components/Education';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from "react";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    },{
      threshold: 0.1
    }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

const Home = () => {
  const aboutRef = useRef();
  const isVisibleAbout = useIsVisible(aboutRef);

  const projectsRef = useRef();
  const isVisibleProjects = useIsVisible(projectsRef);

  const educationRef = useRef();
  const isVisibleEducation = useIsVisible(educationRef);

  const skillsRef = useRef();
  const isVisibleSkills = useIsVisible(skillsRef);

  const contactRef = useRef();
  const isVisibleContact = useIsVisible(contactRef);
  return (
    <>
      <Navbar />
      <div ref={aboutRef} className={`transition-opacity ease-in duration-700 ${isVisibleAbout ? "opacity-100" : "opacity-0"}`}>
        <About />
      </div>
      <div ref={projectsRef} className={`transition-opacity ease-in duration-700 ${isVisibleProjects ? "opacity-100" : "opacity-0"}`}>
        <Projects />
      </div>
      <div ref={educationRef} className={`transition-opacity ease-in duration-700 ${isVisibleEducation ? "opacity-100" : "opacity-0"}`}>
        <Education />
      </div>
      <div ref={skillsRef} className={`transition-opacity ease-in duration-700 ${isVisibleSkills ? "opacity-100" : "opacity-0"}`}>
        <Skills />
      </div>
      <div ref={contactRef} className={`transition-opacity ease-in duration-700 ${isVisibleContact ? "opacity-100" : "opacity-0"}`}>
        <Contact />
      </div>
    </>
  );
}

const ErrorPage = () => {
  React.useEffect(() => {
    window.location.href = "https://http.cat/404";
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <main className='text-gray-400 bg-gray-900 body-font'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
