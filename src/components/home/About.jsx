import Heading from "../ui/Heading";

const About = () => {
    return (
        <div>
            <section className="py-10">
                <Heading subtitle="who I am" title="About Me" />

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 mb-5">
                    <div className="border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 dark:hover:border-blue-500/50 rounded-md p-8 relative overflow-hidden group">
                        <div className="flex items-center gap-2 text-xs text-secondary uppercase tracking-widest mb-12">
                            <span>📍 Location</span>
                            <span>•</span>
                            <span className="group-hover:text-blue-500 transition-colors">Rajshahi, BD</span>
                        </div>

                        <h2 className="text-3xl font-bold mb-4 tracking-tighter text-primary">BANGLADESH</h2>
                        <div className="space-y-1 text-secondary text-sm">
                            <p>24.3745° N, 88.6042° E</p>
                            <p>GMT+6:00</p>
                        </div>
                    </div>

                    <div className="border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 dark:hover:border-blue-500/50 rounded-md p-5">
                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-6">_About</div>
                        <p className="text-base text-primary mb-5">
                            I&apos;m <span className="text-lg font-bold">Jahid Hasan</span> — a CSE student at Daffodil International University.
                            I specialize in building robust full-stack applications using the MERN stack, with a keen eye for clean UI and efficient backend systems.
                        </p>
                        <div className="mb-5"></div>
                        <p className="italic text-secondary text-sm">&quot;Turning complex logic into elegant user experiences.&quot;</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="border border-purple-500/20 rounded-md p-5 hover:border-purple-500/50 transition-all group">
                        <h3 className="text-purple-400 uppercase text-xs font-bold tracking-widest mb-3 transition-transform duration-300 group-hover:translate-x-1">
                            Growth
                        </h3>

                        <p className="text-secondary text-sm">
                            Continuously evolving with the JavaScript ecosystem to build scalable web solutions.
                        </p>
                    </div>

                    <div className="border border-emerald-500/20 rounded-md p-5 hover:border-emerald-500/50 transition-all group">

                        <h3 className="text-emerald-400 uppercase text-xs font-bold tracking-widest mb-3 transition-transform duration-300 group-hover:translate-x-1">Stack</h3>
                        <p className="text-secondary text-sm">
                            Building full-cycle applications with MongoDB, Express, React, and Node.js for seamless user journeys.
                        </p>
                    </div>


                    <div className="border border-blue-500/20 rounded-md p-5 hover:border-blue-500/50 transition-all group">
                        <h3 className="text-blue-400 uppercase text-xs font-bold tracking-widest mb-3 transition-transform duration-300 group-hover:translate-x-1">Vision</h3>
                        <p className="text-secondary text-sm">
                            Bridging the gap between academic theory at DIU and real-world scalable software solutions.
                        </p>
                    </div>
                </div>


            </section >
        </div >
    );
};

export default About;