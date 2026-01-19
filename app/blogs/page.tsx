import { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';
import { getBlogs } from '@/lib/strapi';
import { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: 'Health Blog',
  description:
    'Health tips, wellness advice, and updates from Swasti Lifecare. Stay informed about healthcare topics that matter to you.',
};

export const revalidate = 60;

// Dummy blog posts for demonstration (would come from Strapi in production)
const DUMMY_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding the Importance of Regular Health Checkups',
    slug: 'importance-of-regular-health-checkups',
    excerpt:
      'Regular health checkups are essential for maintaining good health and catching potential issues early. Learn why preventive care should be a priority for everyone.',
    content: '',
    author: 'Dr. Nisha Jayan',
    publicationDate: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'Managing Chronic Pain: Tips and Strategies',
    slug: 'managing-chronic-pain-tips',
    excerpt:
      'Chronic pain affects millions of people. Discover effective strategies for managing pain and improving your quality of life with expert advice from our specialists.',
    content: '',
    author: 'Swasti Lifecare Team',
    publicationDate: '2024-01-10T10:00:00Z',
  },
  {
    id: 3,
    title: 'The Benefits of Physiotherapy After Surgery',
    slug: 'benefits-of-physiotherapy-after-surgery',
    excerpt:
      'Post-surgical physiotherapy plays a crucial role in recovery. Learn how targeted exercises and therapy can help you regain strength and mobility faster.',
    content: '',
    author: 'Swasti Lifecare Team',
    publicationDate: '2024-01-05T10:00:00Z',
  },
];

export default async function BlogsPage() {
  // In production, this would fetch from Strapi
  const posts = await getBlogs();  // ✅ Fetch from Strapi
  const displayPosts = posts.length > 0 ? posts : DUMMY_POSTS

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="section-heading">Health Blog</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            Stay informed with health tips, wellness advice, and updates from our clinic.
          </p>
        </div>

        {/* Blog Posts */}
        <BlogList posts={displayPosts} />

        {/* Newsletter CTA */}
        <section className="mt-16 bg-primary-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Stay Updated</h2>
            <p className="text-secondary-600 mb-6">
              Follow us on social media for the latest health tips and clinic updates.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/swasti_lifecare"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow on Instagram
              </a>
              <a
                href="https://www.facebook.com/p/Swasti-Lifecare-61577658077432/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
