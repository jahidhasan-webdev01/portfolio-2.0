import Heading from "../ui/Heading";
import WorkCard from "../ui/WorkCard";

const Experience = () => {
  const experiences = [
    {
      role: "Junior Backend Developer",
      type: "Full-time",
      company: "Lintech Group",
      location: "Remote",
      country: "UK",
      duration: "September 2023 - December 2023",
      logo: "/lintech_group.jpg", 
      points: [
        "Built and maintained scalable REST APIs using Express.js and Node.js.",
        "Designed MongoDB databases with Mongoose for efficient data management.",
        "Implemented JWT-based authentication and authorization systems.",
        "Validated API requests and schemas using Zod for improved reliability and security.",
        "Tested and documented backend endpoints using Postman.",
      ],
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Zod",
        "Postman",
      ],
    },
    {
      role: "Full Stack Web Developer (MERN)",
      type: "Full-time",
      company: "Thinky Storm",
      location: "Remote",
      country: "Bangladesh",
      duration: "April 2023 - May 2023",
      logo: "/thinky_storm_logo2.png",
      points: [
        "Worked on production-level features after internship period in the same company.",
        "Developed and maintained full-stack web applications using MERN stack.",
        "Built and optimized REST APIs using Node.js and Express.js.",
        "Improved UI components and responsiveness using React.js, Tailwind CSS, and DaisyUI.",
        "Handled MongoDB database design and query optimization for better performance.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
    {
      role: "Full Stack Web Developer (MERN) Intern",
      type: "Internship",
      company: "Thinky Storm",
      location: "Remote",
      country: "Bangladesh",
      duration: "January 2023 - March 2023",
      logo: "/thinky_storm_logo2.png",
      points: [
        "Developed responsive frontend interfaces using React.js, Tailwind CSS, and DaisyUI.",
        "Built and integrated REST APIs with Node.js and Express.js.",
        "Worked with MongoDB for database operations and data management.",
        "Collaborated with the development team to implement and improve application features.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
  ];

  return (
    <div className="py-10">
      <Heading subtitle="Professional Journey" title="Work Experience" />

      <div className="mt-10 space-y-2 lg:space-y-5">
        {experiences.map((experience, index) => (
          <WorkCard
            key={index}
            experience={experience}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;