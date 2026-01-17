import { SERVICES } from "./constants";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  serviceId?: string;
  author: string;
  date: string;
  image?: string;
  tags: string[];
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  // Portfolio Assignments
  {
    id: "portfolio-assignments-1",
    title: "How to Build a Winning Portfolio: Complete Guide",
    description: "Learn how to create portfolio-ready assignments that showcase your skills and attract clients.",
    content: "Building a professional portfolio is crucial for success...",
    category: "education",
    serviceId: "portfolio-assignments",
    author: "Professional Team",
    date: "2024-01-15",
    tags: ["portfolio", "assignments", "career"],
    readTime: "5 min",
  },
  {
    id: "portfolio-assignments-2",
    title: "Top 10 Portfolio Project Ideas for 2024",
    description: "Discover the most in-demand portfolio projects that will make you stand out.",
    content: "In today's competitive market, having standout projects...",
    category: "education",
    serviceId: "portfolio-assignments",
    author: "Professional Team",
    date: "2024-01-10",
    tags: ["portfolio", "projects", "ideas"],
    readTime: "7 min",
  },
  
  // Computer Projects
  {
    id: "computer-projects-1",
    title: "From Mini to Major: Scaling Your Computer Projects",
    description: "A comprehensive guide to planning and executing computer projects of any scale.",
    content: "Whether you're working on a simple script or a complex application...",
    category: "development",
    serviceId: "computer-projects",
    author: "Development Team",
    date: "2024-01-20",
    tags: ["programming", "projects", "development"],
    readTime: "8 min",
  },
  {
    id: "computer-projects-2",
    title: "Best Practices for Code Documentation",
    description: "Learn how to write documentation that makes your projects professional and maintainable.",
    content: "Good documentation is the difference between...",
    category: "development",
    serviceId: "computer-projects",
    author: "Development Team",
    date: "2024-01-18",
    tags: ["documentation", "coding", "best practices"],
    readTime: "6 min",
  },

  // PhD Research
  {
    id: "phd-research-1",
    title: "Writing Your PhD Thesis: A Step-by-Step Guide",
    description: "Essential strategies and tips for PhD students writing their thesis.",
    content: "Writing a PhD thesis is one of the most challenging academic endeavors...",
    category: "academic",
    serviceId: "phd-research",
    author: "Academic Team",
    date: "2024-01-25",
    tags: ["phd", "thesis", "research", "academic"],
    readTime: "10 min",
  },
  {
    id: "phd-research-2",
    title: "Literature Review: How to Do It Right",
    description: "Master the art of conducting comprehensive literature reviews for your research.",
    content: "A well-executed literature review forms the foundation...",
    category: "academic",
    serviceId: "phd-research",
    author: "Academic Team",
    date: "2024-01-22",
    tags: ["literature review", "research", "academic"],
    readTime: "9 min",
  },

  // Interview Preparation
  {
    id: "interview-prep-1",
    title: "Ace Your Next Job Interview: Complete Preparation Guide",
    description: "Everything you need to know to prepare for and succeed in job interviews.",
    content: "Job interviews can be nerve-wracking, but with proper preparation...",
    category: "career",
    serviceId: "interview-preparation",
    author: "Career Team",
    date: "2024-01-30",
    tags: ["interview", "career", "job search"],
    readTime: "12 min",
  },
  {
    id: "interview-prep-2",
    title: "Technical Interview Questions You Should Know",
    description: "Common technical interview questions and how to answer them effectively.",
    content: "Technical interviews require both knowledge and problem-solving skills...",
    category: "career",
    serviceId: "interview-preparation",
    author: "Career Team",
    date: "2024-01-28",
    tags: ["technical interview", "coding", "career"],
    readTime: "11 min",
  },

  // Digital Marketing
  {
    id: "digital-marketing-1",
    title: "Facebook & Instagram Ads: A Beginner's Guide",
    description: "Learn how to create effective ad campaigns on Meta platforms.",
    content: "Digital marketing on Meta platforms offers incredible reach...",
    category: "marketing",
    serviceId: "digital-marketing",
    author: "Marketing Team",
    date: "2024-02-05",
    tags: ["facebook ads", "instagram ads", "social media marketing"],
    readTime: "9 min",
  },
  {
    id: "digital-marketing-2",
    title: "Optimizing Your Ad Budget for Maximum ROI",
    description: "Strategies to get the most out of your digital marketing budget.",
    content: "Effective budget allocation is key to successful campaigns...",
    category: "marketing",
    serviceId: "digital-marketing",
    author: "Marketing Team",
    date: "2024-02-03",
    tags: ["marketing", "roi", "budget optimization"],
    readTime: "8 min",
  },

  // Web Development
  {
    id: "web-dev-1",
    title: "Modern Web Development: Trends and Best Practices",
    description: "Stay updated with the latest trends and best practices in web development.",
    content: "Web development is constantly evolving with new technologies...",
    category: "development",
    serviceId: "web-development",
    author: "Development Team",
    date: "2024-02-10",
    tags: ["web development", "trends", "best practices"],
    readTime: "10 min",
  },
  {
    id: "web-dev-2",
    title: "Full-Stack Development: Choosing the Right Stack",
    description: "A guide to selecting the best technology stack for your web project.",
    content: "Choosing the right technology stack is crucial for project success...",
    category: "development",
    serviceId: "web-development",
    author: "Development Team",
    date: "2024-02-08",
    tags: ["full-stack", "technology", "web development"],
    readTime: "9 min",
  },
];

export function getPostsByService(serviceId: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.serviceId === serviceId);
}

export function getPostById(id: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.id === id);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter(post => post.category === category);
}

