import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          back to blog
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          {post.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <span>by {post.author}</span>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Markdown Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-sm">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 overflow-x-auto my-4">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-zinc-700 dark:text-zinc-300">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-violet-500 pl-4 italic my-4 text-zinc-600 dark:text-zinc-400">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full border border-zinc-200 dark:border-zinc-800">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-zinc-200 dark:border-zinc-800 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-zinc-200 dark:border-zinc-800 px-4 py-2">
                  {children}
                </td>
              ),
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt || ''}
                  className="rounded-lg my-4 max-w-full h-auto"
                />
              ),
              hr: () => (
                <hr className="my-8 border-zinc-200 dark:border-zinc-800" />
              ),
              a: ({ href, children }) => {
                // Check if it's an internal link (starts with /blog/)
                const isInternal = href?.startsWith('/blog/');
                
                if (isInternal && href) {
                  return (
                    <Link
                      href={href}
                      className="text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      {children}
                    </Link>
                  );
                }
                
                return (
                  <a
                    href={href}
                    className="text-violet-600 dark:text-violet-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}