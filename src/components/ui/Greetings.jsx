"use client"

import { AnimatePresence, motion } from "framer-motion";

const Greetings = () => {
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

                <span className="relative inline-block min-w-[7ch]">
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
    );
};

export default Greetings;