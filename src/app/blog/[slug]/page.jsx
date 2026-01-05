import { notFound } from "next/navigation";

const blogPosts = {
  "my-first-post": {
    title: "My First Blog Post",
    content: `
      <p>Welcome to my blog! This is the full content of the first post.</p>
      <p>You can write long-form articles here. Add images, code blocks, etc.</p>
      <h2>Subheading</h2>
      <p>More detailed explanation goes here...</p>
    `,
    date: "January 1, 2026",
  },
  "nextjs-is-awesome": {
    title: "Why Next.js is Awesome",
    content: `
      <p>Next.js makes building fast, SEO-friendly apps easy.</p>
      <ul>
        <li>Static Generation</li>
        <li>Server-Side Rendering</li>
        <li>App Router for better routing</li>
      </ul>
    `,
    date: "December 15, 2025",
  },
  "building-dynamic-routes": {
    title: "Building Dynamic Routes in Next.js",
    content: `
      <p>Dynamic routes use folders like [slug] to handle variable URLs.</p>
      <p>This page is loaded dynamically based on the slug in the URL!</p>
    `,
    date: "November 20, 2025",
  },
};

export default async function generateMetadata({ params }) {
  const { slug } = await params; 
  const post = blogPosts[slug];
  if (!post) {
    notFound(); 
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4  mt-10">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-600 mb-8 block">{post.date}</time>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

