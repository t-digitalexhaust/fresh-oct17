import React from "react";
import Link from "next/link";

type Project = {
  id: string;
  name: string;
};

export default async function ProjectsPage() {
  const projectPromise = new Promise<Project[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Project 1" },
        { id: "2", name: "Project 2" },
        { id: "3", name: "Project 3" },
      ]);
    }, 5000);
  });

  const projects = await projectPromise;

  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}
