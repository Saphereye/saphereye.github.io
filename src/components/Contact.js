import React from "react";
import { EnvelopeIcon, DocumentArrowDownIcon } from "@heroicons/react/24/solid";

export default function Contact() {
    const [fact, setFact] = React.useState(null);
    const today = new Date();
    const month = today.getMonth() + 1; // getMonth() returns month index starting from 0
    const day = today.getDate();

    React.useEffect(() => {
        fetch(`http://numbersapi.com/${month}/${day}/date`)
            .then(response => response.text())
            .then(data => setFact(data))
            .catch(error => console.error('Error:', error));
    }, [])

    return (
        <section id="contact" className="relative">
            <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap items-center">
                <div className="flex-grow bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative min-h-[400px]">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=bits-hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                </div>
                <div className="flex items-center flex-col p-2 lg:w-1/2 sm:w-1/2">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <ul class="list-disc text-xl">
                        <li>
                            <EnvelopeIcon className="w-5 inline-block" />
                            <a className="text-indigo-400 leading-relaxed px-2" href="mailto:adarshdas950@gmail.com">
                                adarshdas950@gmail.com
                            </a>
                        </li>
                        <li>
                            <i class="devicon-github-original"></i>
                            <a className="text-indigo-400 leading-relaxed px-2" href="https://github.com/Saphereye">
                                Saphereye
                            </a>
                        </li>
                        <li>
                            <i class="devicon-linkedin-plain"></i>
                            <a className="text-indigo-400 leading-relaxed px-2" href="https://www.linkedin.com/in/adarsh-das-8684ab240/">
                                Adarsh Das
                            </a>
                        </li>
                        <li>
                            <DocumentArrowDownIcon className="w-5 inline-block" />
                            <a className="text-indigo-400 leading-relaxed px-2" href="./projectdata/Adarsh_resume (15 Jan)_compressed.pdf">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}