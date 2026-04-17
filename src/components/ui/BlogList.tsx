'use client';

import { useState } from 'react';
import { BlogPost } from '@/types';
import BlogCard from './BlogCard';
import { ArrowDownAZ, Calendar, ChevronLeft, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogListProps {
  posts: BlogPost[];
  groupedPosts: Record<string, BlogPost[]>;
}

export default function BlogList({ posts, groupedPosts }: BlogListProps) {
  const [sortMode, setSortMode] = useState<'date' | 'project'>('date');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-zinc-600 dark:text-zinc-400">
          No blog posts yet. Check back soon!
        </p>
      </div>
    );
  }

  const handleSortMode = (mode: 'date' | 'project') => {
    setSortMode(mode);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Sort Toggle */}
      <div className="mb-8 flex gap-2">
        <button
          onClick={() => handleSortMode('date')}
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
          onClick={() => handleSortMode('project')}
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

      {sortMode === 'date' ? (
        <div className="grid gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {selectedProject === null ? (
            <motion.div
              key="project-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(groupedPosts).map(([project, projectPosts], index) => (
                  <motion.button
                    key={project}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className="group flex flex-col items-center justify-center gap-3 p-5 aspect-square rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-all duration-300 text-center"
                  >
                    <FolderOpen className="w-7 h-7 text-violet-500 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight">
                      {project}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500">
                      {projectPosts.length} {projectPosts.length === 1 ? 'post' : 'posts'}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`project-${selectedProject}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  All Projects
                </button>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white pb-1 border-b-2 border-violet-600 dark:border-violet-400">
                  {selectedProject}
                </h2>
              </div>
              <div className="grid gap-6">
                {groupedPosts[selectedProject].map((post, index) => (
                  <BlogCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
