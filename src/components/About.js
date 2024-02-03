import React from "react";

import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0% { background-position: 0% 50% }
  100% { background-position: 100% 50% }
`;

const StyledH1 = styled.h1`
  background: linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff, #4b0082, #0000ff, #00ff00, #ffff00, #ff7f00, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff, #4b0082, #0000ff, #00ff00, #ffff00, #ff7f00, #ff0000);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font: 900 clamp(.875em, 7.25vw, 5em) arial black, sans-serif;
  font-size: 1.5em;
  text-align: center;
  animation: ${animate} 4s normal infinite;
`;

const scrollToElement = (element) => {
    document.querySelector(`#${element}`).scrollIntoView({ behavior: 'smooth' });
};

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <StyledH1>Hi, I'm Adarsh Das!</StyledH1>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        An enthusiastic and passionate developer with a keen interest in Machine Learning and Graphics. I am a quick learner and love to work on new and challenging projects. I am currently in my 3rd year of B.Tech in Computer Science at BITS Hyderabad.
                    </p>
                    <div className="flex justify-center">
                        <a
                            onClick={() => scrollToElement('contact')}
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            onClick={() => scrollToElement('projects')}
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded transform hover:scale-105 transition-transform duration-300"
                        alt="hero"
                        src="./dp.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}