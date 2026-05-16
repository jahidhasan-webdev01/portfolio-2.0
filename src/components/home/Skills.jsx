import { FaCode, FaLayerGroup, FaServer, FaDatabase, FaTools, FaGithub, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { SiExpress, SiJavascript, SiTypescript } from "react-icons/si";
import Heading from "../ui/Heading";
import { CgVercel } from "react-icons/cg";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaCss } from "react-icons/fa6";
import CategoryCard from "../ui/CategoryCard";

const categories = [
    {
        title: "Programming Languages",
        CategoryIcon: FaCode,
        skills: [
            { name: "JavaScript", Icon: SiJavascript },
            { name: "Python", Icon: FaPython },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "HTML5", Icon: FaHtml5 },
            { name: "CSS3", Icon: FaCss },
        ],
    },
    {
        title: "Frontend Development",
        CategoryIcon: FaLayerGroup,
        skills: [
            { name: "React", Icon: GrReactjs },
            { name: "Next.js", Icon: RiNextjsFill },
            { name: "Tailwind CSS", Icon: RiTailwindCssFill },
        ],
    },
    {
        title: "Backend Development",
        CategoryIcon: FaServer,
        skills: [
            { name: "Node.js", Icon: FaNodeJs },
            { name: "Express.js", Icon: SiExpress }
        ],
    },
    {
        title: "Databases",
        CategoryIcon: FaDatabase,
        skills: [
            { name: "MongoDB", Icon: DiMongodb },
            { name: "PostgreSQL", Icon: DiPostgresql }
        ],
    },
    {
        title: "Tools & Technologies",
        CategoryIcon: FaTools,
        skills: [
            { name: "Git", Icon: FaGithub },
            { name: "Vercel", Icon: CgVercel },
        ],
    },
];

export default function Skills() {
    return (
        <>
            <style>
                {`
            @keyframes skillWave {
            0%   { transform: rotate(0deg); }
            15%  { transform: rotate(18deg); } 
            35%  { transform: rotate(-12deg); }
            55%  { transform: rotate(16deg); }
            75%  { transform: rotate(-8deg); }
            92%  { transform: rotate(5deg); }
            100% { transform: rotate(0deg); }
            }
        `}
            </style>

            <div className="py-20">
                <Heading subtitle="what i work with" title=" Skills &amp; Technologies" />

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((category) => (
                        <CategoryCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </>
    );
}
