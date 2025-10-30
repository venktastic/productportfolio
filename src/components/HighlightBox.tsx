import { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  title?: string;
}

export const HighlightBox = ({ children, title }: HighlightBoxProps) => {
  return (
    <div className="my-8 p-6 bg-secondary border-l-4 border-primary rounded-lg">
      {title && <div className="font-semibold text-foreground mb-2">{title}</div>}
      <div className="text-foreground/90">{children}</div>
    </div>
  );
};
