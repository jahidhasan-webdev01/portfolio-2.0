"use client"

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const WorkCard = ({ experience, defaultOpen }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border rounded-md p-5 mx-auto shadow-2xl transition-all duration-300">
            <div className="flex justify-between items-start">
                <div className="flex gap-5">
                    <div className="relative w-16 h-16 bg-white rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
                        <Image src={experience.logo} alt={experience.company} width={48} height={48} />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className="lg:text-xl font-bold text-white">{experience.role}</h3>
                            <span className="text-gray-400 text-xs px-2.5 py-1 rounded-full border border-white/5">
                                {experience.type}
                            </span>
                        </div>
                        <p className="text-sm lg:text-base text-gray-400 mt-1">
                            {experience.company}, {experience.country} • <span className="text-gray-500">{experience.location}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 text-sm hidden sm:inline">{experience.duration}</span>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`text-gray-500 hover:text-white transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                    >
                        <ChevronDown size={24} />
                    </button>
                </div>
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <ul className="space-y-2 mb-6 ml-5">
                        {experience.points.map((point, index) => (
                            <li key={index} className="text-gray-400 text-sm list-disc pl-2">
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {experience.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-xs text-white"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;