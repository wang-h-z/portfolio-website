'use client';

import { useState } from 'react';
import { BlogPost } from '@/types';
import BlogCard from './BlogCard';
import { ArrowDownAZ, Calendar } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
  groupedPosts: Record<string, BlogPost[]>;
}

export default function BlogList({ posts, groupedPosts }: BlogListProps) {
  const [sortMode, setSortMode] = useState<'date' | 'project'>('date');

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-zinc-600 dark:text-zinc-400">
          No blog posts yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Sort Toggle */}
      <div className="mb-8 flex gap-2">
        <button
          onClick={() => setSortMode('date')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            sortMode === 'date'
              ? 'bg-violet-600 text-white'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Sort by Date
        </button>
        <button
          onClick={() => setSortMode('project')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            sortMode === 'project'
              ? 'bg-violet-600 text-white'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          <ArrowDownAZ className="w-4 h-4" />
          Sort by Project
        </button>
      </div>

      {/* Blog Posts Grid */}
      {sortMode === 'date' ? (
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          {Object.entries(groupedPosts).map(([project, projectPosts], groupIndex) => (
            <div key={project}>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 pb-2 border-b-2 border-violet-600 dark:border-violet-400">
                {project}
              </h2>
              <div className="grid gap-6">
                {projectPosts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    index={groupIndex * 3 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
