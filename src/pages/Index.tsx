import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero/Introduction Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img 
                src={profilePhoto} 
                alt="Venkatesh Murthy N S" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary-foreground/20 shadow-[var(--shadow-strong)] object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Venkatesh Murthy N S
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
                Product Manager & Full Stack Developer
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Building impactful products that solve real problems and deliver measurable results
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">About Me</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              I'm a Product Manager and Full Stack Developer with a passion for creating products that make a real difference. 
              With experience across healthcare tech, fintech, and SaaS platforms, I specialize in identifying user pain points 
              and translating them into elegant, scalable solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My approach combines deep technical knowledge with strong product thinking. I believe the best products are built 
              when engineering excellence meets genuine user empathy. Whether I'm defining product strategy, designing user 
              experiences, or writing code, my focus is always on delivering measurable impact.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Product Skills</h3>
                <ul className="space-y-2 text-base">
                  <li>• Product Strategy & Roadmapping</li>
                  <li>• User Research & Analytics</li>
                  <li>• Agile/Scrum Methodologies</li>
                  <li>• Stakeholder Management</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Technical Skills</h3>
                <ul className="space-y-2 text-base">
                  <li>• React, TypeScript, Node.js</li>
                  <li>• Python, SQL, PostgreSQL</li>
                  <li>• AWS, Docker, Kubernetes</li>
                  <li>• REST APIs, Microservices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Case Studies Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Case Studies</h2>
          
          <div className="grid gap-8">
            {/* Scan and Pay Case Study Card */}
            <Link to="/case-study/scan-and-pay" className="group">
              <article className="bg-card border border-border rounded-xl p-8 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Scan and Pay: Bringing Cashless Insurance to Non-Network Hospitals
                  </h3>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform flex-shrink-0" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Solved the critical pain point of cashless payment failure at non-network hospitals by introducing a customer-driven, 
                  in-app Scan and Pay feature that eliminated operational risk and achieved 100% adoption.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    Product Management
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    UX Design
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    Fraud Prevention
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    Payment Integration
                  </span>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button 
            asChild 
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 h-auto"
          >
            <a 
              href="https://forms.google.com/your-form-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Get In Touch
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
          
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-4">Or reach out directly:</p>
            <a 
              href="mailto:your.email@example.com" 
              className="text-lg font-medium hover:text-primary-foreground/80 transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              your.email@example.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Venkatesh Murthy N S. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
