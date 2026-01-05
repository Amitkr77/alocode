import Link from "next/link";

// Sample blog posts data (replace with real data later)
const blogPosts = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    excerpt: "This is a short summary of my first exciting blog post.",
    date: "January 1, 2026",
  },
  {
    slug: "nextjs-is-awesome",
    title: "Why Next.js is Awesome",
    excerpt:
      "Discover the power of server-side rendering and static generation.",
    date: "December 15, 2025",
  },
  {
    slug: "building-dynamic-routes",
    title: "Building Dynamic Routes in Next.js",
    excerpt: "Learn how to create flexible URLs with dynamic segments.",
    date: "November 20, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
