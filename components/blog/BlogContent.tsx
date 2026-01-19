'use client';

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface BlogContentProps {
  content: string | BlocksContent;
}

export default function BlogContent({ content }: BlogContentProps) {
  // Check if content is a string
  if (typeof content === 'string') {
    // Try to parse as JSON (Strapi blocks format)
    try {
      const blocks: BlocksContent = JSON.parse(content);
      return (
        <div className="prose prose-lg prose-secondary max-w-none prose-headings:text-secondary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
          <BlocksRenderer content={blocks} />
        </div>
      );
    } catch {
      // If parsing fails, treat it as HTML string (fallback/dummy data)
      return (
        <div
          className="prose prose-lg prose-secondary max-w-none prose-headings:text-secondary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
  }

  // Content is already BlocksContent object
  return (
    <div className="prose prose-lg prose-secondary max-w-none prose-headings:text-secondary-900 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
      <BlocksRenderer content={content} />
    </div>
  );
}
