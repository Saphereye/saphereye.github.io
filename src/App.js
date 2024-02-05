import logo from './logo.svg';
import React from 'react';
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

const Home = () => {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
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
