import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Banner />
      <Skills />
      {/* <About /> */}
      <Projects />
      <Experience />
      <Education />
    </>
  );
}
