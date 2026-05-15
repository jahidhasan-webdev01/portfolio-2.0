import { CalendarDays, GraduationCap } from 'lucide-react';
import React from 'react';
import Heading from '../ui/Heading';

const Education = () => {
    const education = [
        { id: 1, side: "left", title: "B.Sc in Computer Science", institution: "Daffodil International University", date: "2021 – Present" },
        { id: 2, side: "right", title: "Higher Secondary Certificate (HSC)", institution: "Science — RAJSHAHI Board", date: "2018 – 2020" },
        { id: 3, side: "left", title: "Secondary School Certificate (SSC)", institution: "Science — RAJSHAHI Board", date: "2016 – 2018" },
        { id: 4, side: "right", title: "Junior School Certificate (JSC)", institution: "RAJSHAHI Board", date: "2013" },
    ];

    return (
        <div className="py-10">
            <Heading subtitle="My journey" title="Education" />

            <div className="relative flex flex-col mt-10">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-black dark:bg-white" />

                {education.map((item, index) => (
                    <div 
                        key={index} 
                        className="grid grid-cols-[32px_1fr] md:grid-cols-[1fr_20px_1fr] items-start mb-8 relative"
                    >
                        <div className={`hidden md:block text-right pr-5 ${item.side !== "left" ? "invisible pointer-events-none" : ""}`}>
                            <h3 className="text-base font-semibold text-primary mb-0.5">{item.title}</h3>
                            <p className="text-sm text-secondary mb-1">{item.institution}</p>
                            <span className="inline-flex items-center gap-1 text-sm text-secondary/60">
                                <CalendarDays className="w-3 h-3" /> {item.date}
                            </span>
                        </div>

                        <div className="flex justify-center pt-1 z-10 md:col-start-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-black dark:bg-white border-2 border-background" />
                        </div>

                        <div className={`pl-4 md:pl-5 md:block ${item.side !== "right" ? "md:hidden" : ""}`}>
                            <h3 className="text-base font-semibold text-primary mb-0.5">{item.title}</h3>
                            <p className="text-sm text-secondary mb-1">{item.institution}</p>
                            <span className="inline-flex items-center gap-1 text-sm text-secondary/60">
                                <CalendarDays className="w-3 h-3" /> {item.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;