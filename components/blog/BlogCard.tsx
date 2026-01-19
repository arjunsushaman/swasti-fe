import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';

type BlogCardProps = Omit<BlogPost, 'id' | 'content'>;

export default function BlogCard({
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publicationDate,
}: BlogCardProps) {
  const formattedDate = new Date(publicationDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="card group hover:border-primary-200">
      <Link href={`/blogs/${slug}`} className="block">
        {/* Cover Image */}
        <div className="aspect-video bg-secondary-100 rounded-lg overflow-hidden mb-4 -mx-2 -mt-2">
          {coverImage ? (
            <Image
              src={coverImage}
              alt={title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-secondary-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-secondary-600 mb-4 line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-secondary-500">
          <span>{author}</span>
          <time dateTime={publicationDate}>{formattedDate}</time>
        </div>
      </Link>
    </article>
  );
}
