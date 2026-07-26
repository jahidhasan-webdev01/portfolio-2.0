import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((item) => item.slug === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}