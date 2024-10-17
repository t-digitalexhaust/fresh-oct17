import { notFound } from "@/node_modules-old/next/navigation";
import React from "@/node_modules-old/@types/react";

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
