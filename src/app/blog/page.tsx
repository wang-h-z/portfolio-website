import { getAllPosts, getPostsSortedByProject } from '@/lib/blog';
import BlogList from '@/components/ui/BlogList';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function BlogPage() {
  const posts = getAllPosts();
  const groupedPosts = getPostsSortedByProject();

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            my blog
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            evidently i am not a writer
          </p>
        </div>

        {/* Blog List with sorting */}
        <BlogList posts={posts} groupedPosts={groupedPosts} />
      </div>
    </main>
  );
}