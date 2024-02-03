import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=bits-hyderabad&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                BITS Hyderbad <br />
                                Secunderabad, Telangana <br />
                                India
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed" href="mailto:adarshdas950@gmail.com">
                                adarshdas950@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <a className="leading-relaxed" href="tel:+918527859660">+91 85 2785 9660</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center min-h-[400px] flex-col">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <ul class="list-disc text-xl">
                        <li>Mail: <a className="text-indigo-400 leading-relaxed" href="mailto:adarshdas950@gmail.com">
                            adarshdas950@gmail.com
                        </a> </li>
                        <li>Phone No.: <a className="text-indigo-400 leading-relaxed" href="tel:+918527859660">+91 85 2785 9660</a></li>
                        <li><a className="text-indigo-400 leading-relaxed" href="./projectdata/Adarsh_resume (15 Jan)_compressed.pdf">Resume</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}