import { ArrowLeft, Calendar, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  timeline: string;
  role: string;
  industry: string;
  backLink?: string;
}

export const CaseStudyHeader = ({
  title,
  subtitle,
  timeline,
  role,
  industry,
  backLink = "/",
}: CaseStudyHeaderProps) => {
  return (
    <header className="relative bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{timeline}</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">{role}</span>
          </div>
          <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">{industry}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
