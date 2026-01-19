'use client';

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface BlogContentProps {
  content: string | BlocksContent;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Parse content if it's a string
  const blocks: BlocksContent = typeof content === 'string'
    ? JSON.parse(content)
    : content;

  return (
    <div className="prose prose-lg prose-secondary max-w-none prose-headings:text-secondary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
      <BlocksRenderer content={blocks} />
    </div>
  );
}
