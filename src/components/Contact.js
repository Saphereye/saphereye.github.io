import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
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
                <div className="flex items-center flex-col p-2">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <ul class="list-disc text-xl">
                        <li>Mail: <a className="text-indigo-400 leading-relaxed" href="mailto:adarshdas950@gmail.com">
                            adarshdas950@gmail.com
                        </a> </li>
                        <li><a className="text-indigo-400 leading-relaxed" href="./projectdata/Adarsh_resume (15 Jan)_compressed.pdf">Resume</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}