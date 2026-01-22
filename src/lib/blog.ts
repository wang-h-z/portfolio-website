import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      const fileDate = formatDate(fs.statSync(fullPath).mtime);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || fileDate,
        summary: data.summary || '',
        author: data.author || 'Haozhen Wang',
        readTime: data.readTime || '5 min read',
        tags: data.tags || [],
        project: data.project || 'Uncategorized',
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const fileDate = formatDate(fs.statSync(fullPath).mtime);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || fileDate,
    summary: data.summary || '',
    author: data.author || 'Haozhen Wang',
    readTime: data.readTime || '5 min read',
    tags: data.tags || [],
    project: data.project || 'Uncategorized',
    content,
  };
}

export function getAllProjects(): string[] {
  const posts = getAllPosts();
  const projects = new Set(posts.map(post => post.project).filter(Boolean));
  return Array.from(projects).sort();
}

export function getPostsSortedByProject(): Record<string, BlogPost[]> {
  const posts = getAllPosts();
  const grouped: Record<string, BlogPost[]> = {};

  posts.forEach(post => {
    const project = post.project || 'Uncategorized';
    if (!grouped[project]) {
      grouped[project] = [];
    }
    grouped[project].push(post);
  });

  // Sort posts within each project by date
  Object.keys(grouped).forEach(project => {
    grouped[project].sort((a, b) => (a.date < b.date ? 1 : -1));
  });

  return grouped;
}