import React from "react";
import { notFound } from "next/navigation";

interface TemplatePageProps {
  params: {
    templateId: string;
  };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  if (params.templateId != "123") {
    return notFound();
  }
  return <div>Template Page: {params.templateId}</div>;
}
