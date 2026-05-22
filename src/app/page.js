import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Workflow from "@/components/home/Workflow";

export default function Home() {
  return (
    <>
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <Workflow />

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>
    </>
  );
}