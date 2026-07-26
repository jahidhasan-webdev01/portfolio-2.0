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

                    <div className="border border-gray-300 bg-gray-50 dark:bg-transparent dark:border-blue-500/20 dark:hover:border-blue-500/50 rounded-md p-5 group">
                        <div className="text-xs uppercase tracking-widest mb-6">_About</div>
                        <p className="text-base text-primary mb-5">
                            I&apos;m <span className="text-lg font-bold group-hover:text-blue-500 transition-colors">Jahid Hasan</span> — a CSE student at Daffodil International University.
                            I specialize in building robust full-stack applications using the MERN stack, with a keen eye for clean UI and efficient backend systems.
                        </p>
                        <div className="mb-5"></div>
                        <p className="italic text-secondary text-sm">&quot;Turning complex logic into elegant user experiences.&quot;</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Programming Journey */}
                    <div className="border border-purple-500/20 rounded-md p-5 hover:border-purple-500/50 transition-all group">
                        <h3 className="text-purple-400 uppercase text-xs font-bold tracking-widest mb-3 transition-transform duration-300 group-hover:translate-x-1">
                            Programming Journey
                        </h3>

                        <p className="text-secondary text-sm leading-7">
                            My programming journey started with a curiosity about how websites
                            are built. Beginning with HTML and CSS, I gradually explored
                            JavaScript and eventually discovered my passion for full-stack
                            development. Today, I build modern MERN stack applications while
                            continuously learning new technologies and improving my
                            problem-solving skills through real-world projects.
                        </p>
                    </div>

                    {/* Work I Enjoy */}
                    <div className="border border-emerald-500/20 rounded-md p-5 hover:border-emerald-500/50 transition-all group">
                        <h3 className="text-emerald-400 uppercase text-xs font-bold tracking-widest mb-3 transition-transform duration-300 group-hover:translate-x-1">
                            Work I Enjoy
                        </h3>

                        <p className="text-secondary text-sm leading-7">
                            I enjoy building full-stack web applications that combine clean,
                            responsive user interfaces with scalable backend systems. Creating
                            dashboards, authentication systems, REST APIs, and solving complex
                            programming challenges are the types of work that motivate me the
                            most. I always strive to write clean, maintainable, and efficient
                            code.
                        </p>
                    </div>

                    {/* Beyond Coding */}
                    <div className="border border-blue-500/20 rounded-md p-5 hover:border-blue-500/50 transition-all group">
                        <h3 className="text-blue-400 uppercase text-xs font-bold tracking-widest mb-3 transition-transform duration-300 group-hover:translate-x-1">
                            Beyond Coding
                        </h3>

                        <p className="text-secondary text-sm leading-7">
                            Outside of programming, I enjoy watching football, exploring new
                            technologies, and reading about software engineering and emerging
                            tech trends. I believe every challenge is an opportunity to learn,
                            and I approach both coding and life with curiosity, consistency,
                            and a positive mindset. I love collaborating with others and turning
                            creative ideas into meaningful digital experiences.
                        </p>
                    </div>
                </div>


            </section >
        </div >
    );
};

export default About;