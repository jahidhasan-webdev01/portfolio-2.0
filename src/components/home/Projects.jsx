import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "The Dragoon News",
            description:
                "A responsive front-end web application built with Next.js that delivers real-time news articles with user authentication and secure login using Better Auth.",
            image: "/the-dragon-news.png",
            tech: ["Next.js", "Tailwind", "Better Auth", "Express", "Node.js"],
            live: "https://the-dragoon-news.vercel.app",
            github: "https://github.com/yourname/dragoon-news",
        },
        {
            id: 2,
            title: "E-Shop – Modern Platform",
            description:
                "A scalable e-commerce platform with cart system, Stripe payments, and admin dashboard.",
            image: "/the-dragon-news.png", // Replace with your actual image path
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            live: "https://eshop-demo.vercel.app",
            github: "https://github.com/yourname/eshop",
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
        <section id="projects" className="py-20 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`relative rounded-2xl overflow-hidden group flex flex-col justify-end p-6 md:p-10 border border-white/10 min-h-100 ${
                            index === 0 ? "md:col-span-2" : "col-span-1"
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
                            <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 group-hover:translate-x-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-5 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((text, index) => (
                                    <span 
                                        key={index} 
                                        className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-xs text-white"
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
        </section>
    );
};

export default Projects;