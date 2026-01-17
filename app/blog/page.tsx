import { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { BLOG_POSTS, getPostsByCategory } from "@/lib/blog-data";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Professional Services Insights",
  description: "Learn about portfolio assignments, computer projects, PhD research, interview preparation, digital marketing, and web development.",
};

const categories = ["All", "Education", "Development", "Academic", "Career", "Marketing"];

export default function BlogPage() {
  return (
    <div className="pt-20 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Insights, guides, and tips on portfolio assignments, computer projects, PhD research, interview preparation, digital marketing, and web development.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "Tutti" ? "primary" : "default"}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Service-Specific Blog Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-6 text-dark dark:text-light">
            Browse by Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link key={service.id} href={`/blog/service/${service.id}`}>
                <Card variant="glass" hover className="p-4">
                  <h3 className="font-semibold text-dark dark:text-light">{service.title}</h3>
                  <p className="text-sm text-gray mt-2">View all articles</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {BLOG_POSTS.map((post) => (
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

        {/* Newsletter CTA */}
        <Card variant="gradient" className="p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark dark:text-light">
            Stay Updated
          </h2>
          <p className="text-xl text-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive guides and professional insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-light/50 border border-gray/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-dark dark:text-light"
            />
            <Button>Subscribe</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

