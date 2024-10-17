import { notFound } from "@/node_modules-old/next/navigation";
import React from "@/node_modules-old/@types/react";

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
