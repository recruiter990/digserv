import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { getPostsByService } from "@/lib/blog-data";

interface ServiceBlogPageProps {
  params: {
    serviceId: string;
  };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({ params }: ServiceBlogPageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.serviceId);
  
  if (!service) {
    return {
      title: "Blog Service Not Found",
    };
  }

  return {
    title: `${service.title} Blog | Professional Services`,
    description: `Articles and insights about ${service.title}.`,
    keywords: `${service.title}, ${service.category}, blog, articles`,
  };
}

export default function ServiceBlogPage({ params }: ServiceBlogPageProps) {
  const service = SERVICES.find((s) => s.id === params.serviceId);

  if (!service) {
    notFound();
  }

  const posts = getPostsByService(params.serviceId);

  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="text-primary hover:underline inline-flex items-center mb-4"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">{service.title}</span>
            <span className="text-dark dark:text-light"> Blog</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl">
            Insights, guides, and tips about {service.title.toLowerCase()}.
          </p>
        </div>

        {posts.length === 0 ? (
          <Card variant="glass" className="p-12 text-center">
            <p className="text-gray text-lg">No blog posts available for this service yet.</p>
            <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">
              View all blog posts
            </Link>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} variant="glass" hover className="flex flex-col h-full">
                <div className="aspect-video rounded-lg bg-gradient-primary/20 mb-4 flex items-center justify-center">
                  <Calendar className="h-16 w-16 text-primary/50" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <h2 className="text-xl font-heading font-semibold mb-2 text-dark dark:text-light">
                  {post.title}
                </h2>
                <p className="text-gray mb-4 flex-grow">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-gray mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:translate-x-1 transition-transform"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

