"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaArrowLeft,
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
    FaTools,
    FaRocket,
    FaExclamationTriangle,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ProjectDetailsClient({ project }) {
    return (
        <section className="py-10">
            {/* Back */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                >
                    <FaArrowLeft className="text-xs" />
                    Back to Projects
                </Link>
            </motion.div>

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
                {/* Image */}
                <div className="relative overflow-hidden rounded-md border border-gray-300 dark:border-blue-500/20">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1400}
                        height={800}
                        priority
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Info */}
                <div className="border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 rounded-md p-6 flex flex-col">
                    <p className="text-xs uppercase tracking-widest text-secondary mb-4">
                        Project Overview
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-primary mb-5">
                        {project.title}
                    </h1>

                    <p className="text-sm leading-7 text-secondary mb-8">
                        {project.description}
                    </p>

                </div>
            </motion.div>

            {/* Technology */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10 border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 rounded-md p-6"
            >
                <div className="flex items-center gap-2 mb-6">
                    <FaTools className="text-blue-500" />
                    <h2 className="text-xs uppercase tracking-widest text-secondary">
                        Technology Stack
                    </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 rounded-md border border-gray-300 dark:border-blue-500/20 text-xs text-secondary hover:border-blue-500/50 transition"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Challenges & Future */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

                {/* Challenges */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 rounded-md p-6"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <FaExclamationTriangle className="text-orange-400" />
                        <h2 className="text-xs uppercase tracking-widest text-secondary">
                            Challenges Faced
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {project.challenges.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex gap-3"
                            >
                                <div className="w-2 h-2 mt-2 rounded-full bg-orange-400 shrink-0" />

                                <p className="text-sm leading-7 text-secondary">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Future */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 rounded-md p-6"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <FaRocket className="text-emerald-400" />
                        <h2 className="text-xs uppercase tracking-widest text-secondary">
                            Future Improvements
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {project.future.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 5 }}
                                className="flex gap-3"
                            >
                                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400 shrink-0" />

                                <p className="text-sm leading-7 text-secondary">
                                    {item}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-5 border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 rounded-md p-6"
            >
                <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-2">
                        Project Status
                    </p>

                    <p className="text-sm text-secondary leading-7">
                        This project demonstrates my ability to build modern,
                        scalable full-stack applications with clean UI,
                        efficient backend architecture, authentication,
                        database design, and production-ready deployment.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-2">

                    <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" className="cursor-pointer text-sm">
                            <FaExternalLinkAlt />
                            <span className="translate-y-0.5">
                                Live Preview
                            </span>
                        </Button>
                    </Link>
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" className="cursor-pointer text-sm">
                            <FaGithub />
                            <span className="translate-y-0.5">
                                GitHub
                            </span>
                        </Button>
                    </Link>

                    <Link href="/#projects">
                        <Button variant="outline" className="cursor-pointer text-sm">
                            <FaArrowLeft />
                            <span className="translate-y-0.5">
                                Back to Projects
                            </span>
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}