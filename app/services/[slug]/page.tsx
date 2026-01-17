import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, CONTACT_EMAIL } from "@/lib/constants";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Briefcase, Code, GraduationCap, UserCheck, TrendingUp, Globe, CheckCircle, Mail, Clock, Award, Users } from "lucide-react";

const iconMap: Record<string, typeof Briefcase> = {
  "portfolio-assignments": Briefcase,
  "computer-projects": Code,
  "phd-research": GraduationCap,
  "interview-preparation": UserCheck,
  "digital-marketing": TrendingUp,
  "web-development": Globe,
};

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Professional Services`,
    description: service.description,
    keywords: `${service.title}, ${service.category}, professional services`,
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.id] || Briefcase;

  const benefits = [
    "Professional quality deliverables",
    "Timely delivery guaranteed",
    "Revisions and feedback included",
    "24/7 customer support",
    "Confidentiality assured",
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss your requirements and expectations",
    },
    {
      step: 2,
      title: "Project Planning",
      description: "Create a detailed plan and timeline",
    },
    {
      step: 3,
      title: "Development",
      description: "Work on your project with regular updates",
    },
    {
      step: 4,
      title: "Review & Revisions",
      description: "Get feedback and make necessary adjustments",
    },
    {
      step: 5,
      title: "Final Delivery",
      description: "Receive your completed project",
    },
  ];

  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary/10 mb-6">
            <Icon className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{service.title}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Features Grid */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} variant="glass" className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-dark dark:text-light">
                      {feature}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dark dark:text-light">
                Why Choose Our {service.title}?
              </h2>
              <p className="text-gray text-lg mb-8">
                We deliver professional, high-quality results tailored to your specific needs. 
                Our experienced team ensures timely delivery and excellent customer service.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <span className="text-gray text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card variant="glass" className="p-8">
              <div className="aspect-video rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                <Icon className="h-24 w-24 text-primary/50" />
              </div>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Our Process
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} variant="glass" className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-dark dark:text-light">
                  {step.title}
                </h3>
                <p className="text-gray text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-24">
          <Card variant="gradient" className="p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  100%
                </div>
                <div className="text-gray">Satisfaction Rate</div>
              </div>
              <div>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  500+
                </div>
                <div className="text-gray">Happy Clients</div>
              </div>
              <div>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  24/7
                </div>
                <div className="text-gray">Support</div>
              </div>
              <div>
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  Fast
                </div>
                <div className="text-gray">Delivery</div>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and get a free quote. 
              We're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  {CONTACT_EMAIL}
                </a>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

