'use client';

import TechStackLayers from '@/components/ui/TechStackLayers';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-zinc-900 dark:text-white mb-12">
          My Tech Stack
        </h1>
        <TechStackLayers />
      </div>
    </main>
  );
}