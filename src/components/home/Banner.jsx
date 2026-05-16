"use client"

import { TypeAnimation } from 'react-type-animation';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbFileCv } from 'react-icons/tb';
import { Button } from '../ui/button';
import Link from 'next/link';
import myImage from "@/assets/jahid.png";

const Banner = () => {
    const greetings = [
        "Hello!",
        "¡Hola!",
        "হ্যালো!",
        "!مرحبا",
        "नमस्ते!",
        "Merhaba!",
        "Ciao!",
        "こんにちは!",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-2 lg:gap-10 w-full py-5 lg:py-10">
            <div className='order-2 lg:order-1 col-span-2 lg:col-span-1'>
                <span className="flex items-center gap-1 min-h-8">
                    <span className="flex items-center gap-2 min-h-8">
                        <motion.span
                            role="img"
                            aria-label="waving hand"
                            animate={{ rotate: [0, 20, -10, 20, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 1.5,
                                ease: "easeInOut",
                            }}
                            className="inline-block origin-bottom text-5xl"
                        >
                            👋
                        </motion.span>

                        <span className="relative inline-block text-secondary">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={greetings[index]}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute left-0 top-0 whitespace-nowrap"
                                >
                                    {greetings[index]}
                                </motion.span>
                            </AnimatePresence>
                            <span className="invisible whitespace-nowrap">
                                {greetings[0]}
                            </span>
                        </span>
                    </span>

                </span>

                <p className='text-xl text-secondary mt-5 lg:mt-10'>My name is,</p>
                <h1 className='text-4xl text-primary font-extrabold my-3'>Jahid Hasan</h1>

                <span className="whitespace-nowrap text-sm">and, I am a </span>
                <TypeAnimation
                    sequence={[
                        'Web Developer',
                        2000,
                        'Problem Solver',
                        2000,
                        'Backend Developer',
                        2000,
                    ]}
                    wrapper="span"
                    speed={5}
                    className="text-sm text-blue-500 inline-block font-semibold"
                    repeat={Infinity}
                />

                <p className='text-sm text-secondary dark:text-gray-400 mt-5'>🚀 Building modern and responsive web experiences <br />
                    MERN Stack Developer passionate about clean UI, smooth performance, and scalable solutions. Open to projects & collaborations.
                </p>

                <div className='mt-5 flex gap-2'>
                    <Link href="https://www.linkedin.com/in/jahid-hasan-webdev01/" target="_blank" rel="noopener noreferrer">
                        <Button variant='outline' className="cursor-pointer text-sm">
                            <FaLinkedin />
                            <span className='translate-y-0.5'>LinkedIn</span>
                        </Button>
                    </Link>

                    <Link href="https://github.com/jahidhasan-webdev01" target="_blank" rel="noopener noreferrer">
                        <Button variant='outline' className="cursor-pointer text-sm">
                            <FaGithub />
                            <span className='translate-y-0.5'>GitHub</span>
                        </Button>
                    </Link>

                    <Button variant='outline' className="cursor-pointer text-sm">
                        <TbFileCv />
                        <span className='translate-y-0.5'>Resume</span>
                    </Button>
                </div>
            </div>

            <div className='order-1 lg:order-2 col-span-2 lg:col-span-1'>
                <div className="relative flex items-center justify-center">
                    
                    {/* Animated Blob Background */}
                    <motion.div
                        animate={{
                            x: [0, 40, -30, 0],
                            y: [0, -30, 30, 0],
                            scale: [1, 1.15, 0.9, 1],
                            rotate: [0, 8, -8, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                        }}
                        className="absolute w-[340px] h-[340px] rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-3xl opacity-50"
                    />

                    <div className="relative z-10">
                        {/* Profile Image */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            src={myImage.src}
                            alt="Profile"
                            className="w-80 h-80 object-cover rounded-full border-[6px] border-white shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default Banner;