import { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import Card from "@/components/ui/Card";
import { Briefcase, Code, GraduationCap, UserCheck, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Professional Services",
  description: "Portfolio assignments, Computer projects, PhD research, Interview preparation, Digital marketing, and Web development services.",
};

const iconMap: Record<string, typeof Briefcase> = {
  "portfolio-assignments": Briefcase,
  "computer-projects": Code,
  "phd-research": GraduationCap,
  "interview-preparation": UserCheck,
  "digital-marketing": TrendingUp,
  "web-development": Globe,
};

export default function ServicesPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Our Services</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Professional services designed to help you succeed. From portfolio assignments to web development, 
            we provide high-quality solutions tailored to your needs.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.id] || TrendingUp;
            const isEven = index % 2 === 0;

            return (
              <section key={service.id} id={service.id} className="scroll-mt-20">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
                  <div className={!isEven ? "lg:col-start-2" : ""}>
                    <div className="p-6 rounded-xl bg-primary/10 w-fit mb-6">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                          </div>
                          <span className="text-gray text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg">
                        <Link href={`/services/${service.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href="/contact">
                          Get Quote
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <Card variant="glass" className="p-8 h-full">
                      <div className="aspect-video rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                        <Icon className="h-24 w-24 text-primary/50" />
                      </div>
                    </Card>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Contact us for a personalized consultation. We create custom solutions tailored to your specific needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

