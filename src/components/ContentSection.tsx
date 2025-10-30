import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

export const ContentSection = ({ title, children }: ContentSectionProps) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-border">
        {title}
      </h2>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
};
