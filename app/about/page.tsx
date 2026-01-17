import { Metadata } from "next";
import Card from "@/components/ui/Card";
import { Target, Eye, Heart, Award, CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About Us | Professional Services Company",
  description: "Learn about our mission and expertise. We provide professional services including portfolio assignments, computer projects, PhD research, interview preparation, digital marketing, and web development.",
};

const values = [
  {
    icon: Target,
    title: "Results",
    description: "We focus on concrete, measurable results that help you achieve your goals.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest reporting on every aspect of our work.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and are dedicated to our clients' success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "High standards in every project and constant pursuit of excellence.",
  },
];

const achievements = [
  "500+ Satisfied Clients",
  "100% Satisfaction Rate",
  "Expert Team Members",
  "24/7 Customer Support",
  "Fast Delivery Guaranteed",
];

export default function AboutPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">About Us</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            We are a professional services company dedicated to helping individuals and businesses succeed through high-quality solutions and expert support.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dark dark:text-light">
                Our Story
              </h2>
              <div className="space-y-4 text-gray text-lg">
                <p>
                  We started with a simple mission: to provide high-quality professional services that help people achieve their goals. 
                  Whether you need portfolio assignments, computer projects, PhD research support, interview preparation, digital marketing, 
                  or web development services, we're here to help.
                </p>
                <p>
                  With years of experience across multiple disciplines, we've helped hundreds of clients succeed in their academic, 
                  career, and business endeavors. From students working on their theses to professionals building their portfolios, 
                  we provide expert support tailored to your specific needs.
                </p>
                <p>
                  Our commitment is to deliver professional, timely, and high-quality results that exceed expectations. 
                  Your success is our success, and we're dedicated to helping you reach your goals.
                </p>
              </div>
            </div>
            <Card variant="glass" className="p-8">
              <div className="aspect-video rounded-lg bg-gradient-primary/20 flex items-center justify-center">
                <Target className="h-24 w-24 text-primary/50" />
              </div>
            </Card>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="glass" className="p-8">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-dark dark:text-light">
                Mission
              </h3>
              <p className="text-gray text-lg">
                To provide professional, high-quality services that empower individuals and businesses to achieve their goals. 
                We deliver tailored solutions, expert guidance, and measurable results across all our service areas.
              </p>
            </Card>

            <Card variant="glass" className="p-8">
              <div className="p-4 rounded-xl bg-secondary/10 w-fit mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-dark dark:text-light">
                Vision
              </h3>
              <p className="text-gray text-lg">
                To be the leading provider of professional services, recognized for excellence, reliability, and customer satisfaction. 
                We envision a future where everyone has access to the professional support they need to succeed.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} variant="glass" hover className="text-center">
                  <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                    {value.title}
                  </h3>
                  <p className="text-gray">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-dark dark:text-light">
            Perché Scegliere Noi
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Esperienza Locale
              </h3>
              <p className="text-gray">
                Conosciamo il mercato di Ancona e comprendiamo le sfide dei business locali.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Approccio Orientato ai Risultati
              </h3>
              <p className="text-gray">
                Ogni strategia è progettata per generare risultati concreti e misurabili.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Report Trasparenti
              </h3>
              <p className="text-gray">
                Report chiari e dettagliati su ogni aspetto delle performance.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Nessun Contratto a Lungo Termine
              </h3>
              <p className="text-gray">
                Flessibilità totale. Puoi interrompere quando vuoi.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Comunicazione Diretta
              </h3>
              <p className="text-gray">
                Accesso diretto al team, senza intermediari o call center.
              </p>
            </Card>
            <Card variant="glass" className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-3 text-dark dark:text-light">
                Risultati Garantiti
              </h3>
              <p className="text-gray">
                Risultati garantiti o rimborsati. La tua soddisfazione è la nostra priorità.
              </p>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <Card variant="gradient" className="p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-dark dark:text-light">
              I Nostri Risultati
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {achievements.map((achievement, index) => (
                <Badge key={index} variant="primary" className="text-base px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2 inline" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

