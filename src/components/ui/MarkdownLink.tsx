'use client';

import Link from 'next/link';

interface MarkdownLinkProps {
  href?: string;
  children?: React.ReactNode;
}

export function MarkdownLink({ href, children }: MarkdownLinkProps) {
  // Check if it's an anchor link (starts with #)
  const isAnchor = href?.startsWith('#');
  // Check if it's an internal link (starts with /blog/)
  const isInternal = href?.startsWith('/blog/');

  if (isAnchor && href) {
    return (
      <a
        href={href}
        className="text-violet-600 dark:text-violet-400 hover:underline"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {children}
      </a>
    );
  }

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
}