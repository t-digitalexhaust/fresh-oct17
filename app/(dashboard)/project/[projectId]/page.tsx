import React from "react";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  if (params.projectId != "123") {
    return notFound();
  }
  return <div>Project Page: {params.projectId}</div>;
}
