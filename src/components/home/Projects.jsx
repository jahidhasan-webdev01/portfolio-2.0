import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Heading from "../ui/Heading";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "The Dragon News",
            description:
                "A responsive front-end web application built with Next.js that delivers real-time news articles with user authentication and secure login using Better Auth.",
            image: "/the-dragon-news.png",
            tech: ["Next.js", "Tailwind", "Better Auth", "Express", "Node.js"],
            live: "https://the-dragon-news-tawny.vercel.app",
            github: "https://github.com/jahidhasan-webdev01/the-dragon-news",
        },
        {
            id: 2,
            title: "Influencer Gear",
            description:
                "A app for influencer gear with product search, brand filtering, cart management using Context API, LocalStorage, and SessionStorage.",
            image: "/influencer-gear.png",
            tech: ["React", "React Hot Toast", "DaisyUI", "React Router"],
            live: "https://influencer-gears01.netlify.app",
            github: "https://github.com/jahidhasan-webdev01/influencer-gears",
        },
        {
            id: 3,
            title: "Portfolio Website",
            description:
                "Personal developer portfolio built with modern UI, dark mode, and smooth animations.",
            image: "/the-dragon-news.png", // Replace with your actual image path
            tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
            live: "https://yourportfolio.vercel.app",
            github: "https://github.com/yourname/portfolio",
        },
        {
            id: 4,
            title: "Chat App – Real Time",
            description:
                "Realtime chat application with socket.io, typing indicator, and online users feature.",
            image: "/the-dragon-news.png", // Replace with your actual image path
            tech: ["React", "Socket.io", "Node.js", "MongoDB"],
            live: "https://chatapp-demo.vercel.app",
            github: "https://github.com/yourname/chatapp",
        },
    ];

    return (
        <div className="py-10">
            <Heading subtitle="Selected Work" title="Things I’ve Built" />
            
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`relative rounded-md overflow-hidden group flex flex-col justify-end p-6 md:p-10 min-h-100 ${index === 0 ? "lg:col-span-2" : "col-span-1"
                            }`}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent" />

                        <div className="relative z-10">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-1">
                                {project.title}
                            </h3>
                            <p className="text-sm lg:text-base text-gray-300 mb-5 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tech.map((text, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 backdrop-blur-md border border-gray-300 rounded-md text-xs text-gray-300"
                                    >
                                        {text}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end gap-5">
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center gap-1 text-xs text-gray-300 hover:text-white"
                                >
                                    Live Preview <MdArrowOutward />
                                </Link>
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-1 text-xs text-gray-300 hover:text-white"
                                >
                                    View Code <FaCode />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;