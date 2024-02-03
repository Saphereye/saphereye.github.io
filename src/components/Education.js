import React from "react";
import Modal from "react-modal";
import { CheckBadgeIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import { education, skills } from "../data";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        backgroundColor: '#1f2937',
        color: '#333',
        fontSize: '16px',
    },
};

Modal.setAppElement('#root');

export default function Education() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        My Education
                    </h1>
                </div>

                <div className="flex flex-wrap md:grid md:grid-cols-2">
                    <div className="lg:flex-grow w-full">
                        <img
                            className="object-cover object-center rounded transform hover:scale-105 transition-transform duration-300"
                            alt="bitshyderabad"
                            src="./projectdata/bits.jpg"
                        />
                    </div>
                    <div className="w-full mx-auto items-center lg:flex-grow p-4">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-justify">
                            Currently in my 3rd year of B.Tech in Computer Science at BITS Hyderabad
                        </h1>
                        <p className="mb-8 leading-relaxed text-justify">
                            I have completed various relevant courses in the field of Computer Science and have a good understanding of the subject. I have also completed a few projects in the field of Web Development and Machine Learning.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            A peek into my coursework
                        </button>
                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={() => setIsModalOpen(false)}
                            style={customStyles}
                            contentLabel="Coursework"
                        >
                            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                {education.map((education) => (
                                    <div key={education} className="p-2 sm:w-1/2 w-full">
                                        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                            <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                            <span className="title-font font-medium text-white">
                                                {education}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    );
}