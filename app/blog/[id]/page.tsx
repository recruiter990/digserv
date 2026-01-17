import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getPostById, BLOG_POSTS } from "@/lib/blog-data";
import Button from "@/components/ui/Button";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostById(params.id);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  // Get related posts (same category or service)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id && (p.category === post.category || p.serviceId === post.serviceId))
    .slice(0, 3);

  return (
    <div className="pt-20 section-padding">
      <div className="container-custom max-w-4xl">
        <Link 
          href="/blog" 
          className="text-primary hover:underline inline-flex items-center mb-8"
        >
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Back to Blog
        </Link>

        <article>
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              {post.serviceId && (
                <Link href={`/blog/service/${post.serviceId}`}>
                  <Badge variant="default">Service Blog</Badge>
                </Link>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-dark dark:text-light">
              {post.title}
            </h1>
            <p className="text-xl text-gray mb-6">{post.description}</p>
            <div className="flex items-center gap-6 text-gray">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime} read</span>
              </div>
              <div>
                By <span className="font-semibold">{post.author}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="aspect-video rounded-xl bg-gradient-primary/20 mb-8 flex items-center justify-center">
              <Calendar className="h-24 w-24 text-primary/50" />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <Card variant="glass" className="p-8">
              <div className="text-gray text-lg leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </Card>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4 text-dark dark:text-light">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="default">{tag}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <Card variant="gradient" className="p-8 mb-12 text-center">
            <h2 className="text-2xl font-heading font-bold mb-4 text-dark dark:text-light">
              Need Help with Your Project?
            </h2>
            <p className="text-gray mb-6">
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </Card>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-3xl font-heading font-bold mb-8 text-dark dark:text-light">
              Related Posts
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <Card variant="glass" hover className="p-6 h-full">
                    <h3 className="text-lg font-semibold mb-2 text-dark dark:text-light">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray text-sm mb-4">{relatedPost.description}</p>
                    <div className="flex items-center text-sm text-gray">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

