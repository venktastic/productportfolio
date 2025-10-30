import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Product Manager & Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Building impactful products that solve real problems and deliver measurable results
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Case Studies</h2>
          
          <div className="grid gap-8">
            {/* Scan and Pay Case Study Card */}
            <Link to="/case-study/scan-and-pay" className="group">
              <article className="bg-card border border-border rounded-xl p-8 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-strong)] transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Scan and Pay: Bringing Cashless Insurance to Non-Network Hospitals
                  </h3>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
                <p className="text-muted-foreground mb-6">
                  Solved the critical pain point of cashless payment failure at non-network hospitals by introducing a customer-driven, in-app Scan and Pay feature that eliminated operational risk and achieved 100% adoption.
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
    </div>
  );
};

export default Index;
