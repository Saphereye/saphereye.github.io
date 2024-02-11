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
    }, {
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
      <div>
        <div class="relative w-full bottom-0">
          <svg class="w-full h-40 mb-8" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="moving-waves">
              <use xlinkHref="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
              <use xlinkHref="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
              <use xlinkHref="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
              <use xlinkHref="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1)" />
            </g>
          </svg>
        </div>
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
