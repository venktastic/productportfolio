interface TechStackProps {
  technologies: string[];
}

export const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-2 my-6">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
