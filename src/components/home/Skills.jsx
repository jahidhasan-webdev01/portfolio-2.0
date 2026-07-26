import { FaCode, FaLayerGroup, FaServer, FaDatabase, FaTools, FaGithub, FaNodeJs, FaPython, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiDaisyui, SiExpress, SiHeroui, SiJavascript, SiJovian, SiJsonwebtokens, SiMongoose, SiNetlify, SiPostman, SiPrisma, SiRedux, SiTypescript } from "react-icons/si";
import Heading from "../ui/Heading";
import { CgVercel } from "react-icons/cg";
import { DiMongodb, DiPostgresql } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import CategoryCard from "../ui/CategoryCard";
import { ZodiacAries } from "lucide-react";

const categories = [
    {
        title: "Programming Languages",
        CategoryIcon: FaCode,
        skills: [
            { name: "JavaScript", Icon: SiJavascript },
            { name: "TypeScript", Icon: SiTypescript },
            { name: "Python", Icon: FaPython },
        ],
    },
    {
        title: "Frontend Development",
        CategoryIcon: FaLayerGroup,
        skills: [
            { name: "React", Icon: GrReactjs },
            { name: "Next.js", Icon: RiNextjsFill },
            { name: "Tailwind CSS", Icon: RiTailwindCssFill },
            { name: "DaisyUI", Icon: SiDaisyui },
            { name: "HeroUI", Icon: SiHeroui },
            { name: "Redux", Icon: SiRedux },
        ],
    },
    {
        title: "Backend Development",
        CategoryIcon: FaServer,
        skills: [
            { name: "Node.js", Icon: FaNodeJs },
            { name: "Express.js", Icon: SiExpress },
            { name: "JWT", Icon: SiJsonwebtokens },
            { name: "Mongoose", Icon: SiMongoose },
            { name: "Prisma", Icon: SiPrisma },
            { name: "Zod", Icon: ZodiacAries },
            { name: "Joi", Icon: SiJovian },
        ],
    },
    {
        title: "Databases",
        CategoryIcon: FaDatabase,
        skills: [
            { name: "MongoDB", Icon: DiMongodb },
            { name: "PostgreSQL", Icon: DiPostgresql },
        ],
    },
    {
        title: "Tools & Technologies",
        CategoryIcon: FaTools,
        skills: [
            { name: "Git", Icon: FaGitAlt },
            { name: "GitHub", Icon: FaGithub },
            { name: "Postman", Icon: SiPostman },
            { name: "Vercel", Icon: CgVercel },
            { name: "Netlify", Icon: SiNetlify },
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
