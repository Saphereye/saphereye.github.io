import React from "react";
import { AcademicCapIcon, PlusIcon } from "@heroicons/react/24/solid";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { academichonors } from "../data";


export default function AcademicHonors() {
    return (
        <section id="academichonors" className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Academic and Professional Achievements
                    </h1>

                    {
                        academichonors.map((honor) => (
                            <Accordion style={{ backgroundColor: 'rgb(31 41 55)', color: 'white' }}>
                                <AccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {honor['title']}
                                </AccordionSummary>
                                <AccordionDetails style={{ textAlign: 'left' }}>
                                    {honor['body']}
                                </AccordionDetails>
                            </Accordion>))
                    }
                </div>
            </div>
        </section>
    );
}