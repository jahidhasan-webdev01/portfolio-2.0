"use client"; // Required if using Next.js App Router for state
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Heading from "../ui/Heading";
import Image from "next/image";

// Sub-component to manage individual card state
const WorkCard = ({ exp, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mt-10 border border-white/10 rounded-2xl p-6 mb-6 mx-auto shadow-2xl bg-[#121212] transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="relative w-16 h-16 bg-white rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
            <Image src={exp.logo} alt={exp.company} width={48} height={48} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="bg-[#262626] text-gray-400 text-xs px-2.5 py-1 rounded-full border border-white/5">
                {exp.type}
              </span>
            </div>
            <p className="text-gray-400 mt-1">
              {exp.company} • <span className="text-gray-500">{exp.location}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500 text-sm hidden sm:inline">{exp.duration}</span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`text-gray-500 hover:text-white transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      {/* Accordion Content */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <ul className="space-y-2 mb-6 ml-5">
            {exp.points.map((point, index) => (
              <li key={index} className="text-gray-400 text-sm list-disc pl-2">
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded-full text-xs text-gray-300"
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

const Experience = () => {
  const experiences = [
    {
      role: "Senior Cloud Security Architect",
      type: "Full-time",
      company: "Axiom Cyber Security",
      location: "Remote",
      duration: "May 2026 - Present",
      logo: "/logos/axiom.png",
      points: [
        "Designed and implemented zero-trust network architectures for global clients.",
        "Led security audit and compliance efforts for multi-cloud deployments.",
      ],
      skills: ["Cloud Security", "Zero Trust", "Python", "AWS"],
    },
    {
      role: "Software Development Engineer Intern",
      type: "Internship",
      company: "Forbid Fire",
      location: "Remote",
      duration: "June 2024 - July 2024",
      logo: "/logos/forbid.png",
      points: [
        "Contributed to software development tasks across frontend and backend workflows.",
        "Collaborated remotely with the team to ship product improvements.",
      ],
      skills: ["React", "Node.js", "TypeScript"],
    },
  ];

  return (
    <div className="py-10 max-w-4xl mx-auto px-4">
      <Heading subtitle="Professional Journey" title="Work Experience" />

      {experiences.map((exp, index) => (
        <WorkCard 
          key={index} 
          exp={exp} 
          // Logic: First card (index 0) is open, others closed
          defaultOpen={index === 0} 
        />
      ))}
    </div>
  );
};

export default Experience;