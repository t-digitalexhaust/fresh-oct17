import React from "react";
import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div>
      <h1>Project Not Found</h1>
      <p>Sorry, the project you're looking for doesn't exist.</p>
      <Link href="/projects">Back to Projects</Link>
    </div>
  );
}
