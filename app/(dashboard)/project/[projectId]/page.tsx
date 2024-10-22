import React from "react";
import { notFound } from "next/navigation";

type PageProps = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProjectPage({ params }: PageProps) {
  if (params.projectId !== "123") {
    notFound();
  }

  return <div>ProjectPage: {params.projectId}</div>;
}
