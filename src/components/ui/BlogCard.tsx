'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-zinc-900/50">
          {/* Title */}
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {post.title}
          </h3>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-3">
            {post.summary}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}