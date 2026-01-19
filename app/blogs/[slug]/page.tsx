import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogSlugs } from '@/lib/strapi';
import { BlogPost } from '@/types';
import BlogContent from '@/components/blog/BlogContent';

// Dummy blog posts for demonstration
const DUMMY_POSTS: Record<string, BlogPost> = {
  'importance-of-regular-health-checkups': {
    id: 1,
    slug: 'importance-of-regular-health-checkups',
    title: 'Understanding the Importance of Regular Health Checkups',
    excerpt:
      'Regular health checkups are essential for maintaining good health and catching potential issues early.',
    content: `
      <p>Regular health checkups are one of the most important steps you can take to maintain your overall health and wellbeing. Many serious health conditions can be detected early through routine screenings, when they are most treatable.</p>

      <h2>Why Regular Checkups Matter</h2>
      <p>Prevention is always better than cure. Regular health checkups help:</p>
      <ul>
        <li>Detect diseases in early stages when treatment is most effective</li>
        <li>Monitor existing health conditions</li>
        <li>Update vaccinations and preventive care</li>
        <li>Build a relationship with your healthcare provider</li>
        <li>Get personalized health advice based on your risk factors</li>
      </ul>

      <h2>What to Expect During a Checkup</h2>
      <p>A typical health checkup at Swasti Lifecare includes:</p>
      <ul>
        <li>Review of medical history and current medications</li>
        <li>Physical examination</li>
        <li>Blood pressure and vital signs check</li>
        <li>Blood tests as recommended</li>
        <li>Discussion of lifestyle factors and health concerns</li>
      </ul>

      <h2>How Often Should You Get a Checkup?</h2>
      <p>The frequency of checkups depends on your age, health status, and risk factors. Generally:</p>
      <ul>
        <li>Young adults (18-39): Every 2-3 years if healthy</li>
        <li>Adults (40-64): Annually</li>
        <li>Seniors (65+): Annually or as recommended</li>
        <li>Those with chronic conditions: As advised by your doctor</li>
      </ul>

      <p>Don't wait until you feel unwell to see a doctor. Schedule your preventive health checkup today at Swasti Lifecare.</p>
    `,
    author: 'Dr. Nisha Jayan',
    publicationDate: '2024-01-15T10:00:00Z',
  },
  'managing-chronic-pain-tips': {
    id: 2,
    slug: 'managing-chronic-pain-tips',
    title: 'Managing Chronic Pain: Tips and Strategies',
    excerpt:
      'Chronic pain affects millions of people. Discover effective strategies for managing pain and improving your quality of life.',
    content: `
      <p>Chronic pain is a complex condition that affects millions of people worldwide. Unlike acute pain that serves as a warning signal, chronic pain persists for months or even years and can significantly impact quality of life.</p>

      <h2>Understanding Chronic Pain</h2>
      <p>Chronic pain can result from various conditions including:</p>
      <ul>
        <li>Arthritis and joint conditions</li>
        <li>Back and neck problems</li>
        <li>Nerve damage (neuropathy)</li>
        <li>Fibromyalgia</li>
        <li>Previous injuries</li>
      </ul>

      <h2>Effective Management Strategies</h2>

      <h3>1. Work with Healthcare Professionals</h3>
      <p>A multidisciplinary approach often works best. This may include your general physician, specialists, and physiotherapists.</p>

      <h3>2. Physical Therapy</h3>
      <p>Targeted exercises can strengthen muscles, improve flexibility, and reduce pain. Our physiotherapy team can create a personalized program for you.</p>

      <h3>3. Lifestyle Modifications</h3>
      <ul>
        <li>Maintain a healthy weight to reduce stress on joints</li>
        <li>Practice good posture</li>
        <li>Get adequate sleep</li>
        <li>Stay active within your limits</li>
      </ul>

      <h3>4. Mind-Body Techniques</h3>
      <p>Stress can worsen pain. Consider techniques like deep breathing, meditation, and gentle yoga.</p>

      <h2>When to Seek Help</h2>
      <p>If pain is affecting your daily life, don't suffer in silence. Our team at Swasti Lifecare can help develop a comprehensive pain management plan tailored to your needs.</p>
    `,
    author: 'Swasti Lifecare Team',
    publicationDate: '2024-01-10T10:00:00Z',
  },
  'benefits-of-physiotherapy-after-surgery': {
    id: 3,
    slug: 'benefits-of-physiotherapy-after-surgery',
    title: 'The Benefits of Physiotherapy After Surgery',
    excerpt:
      'Post-surgical physiotherapy plays a crucial role in recovery. Learn how targeted exercises can help you recover faster.',
    content: `
      <p>Surgery is often just the first step in your recovery journey. Post-surgical physiotherapy is essential for regaining strength, mobility, and returning to your normal activities.</p>

      <h2>Why Physiotherapy After Surgery?</h2>
      <p>After surgery, your body needs to heal and rebuild. Physiotherapy helps by:</p>
      <ul>
        <li>Reducing pain and swelling</li>
        <li>Preventing complications like blood clots</li>
        <li>Restoring range of motion</li>
        <li>Rebuilding muscle strength</li>
        <li>Improving balance and coordination</li>
        <li>Speeding up overall recovery</li>
      </ul>

      <h2>Common Surgeries That Benefit from Physiotherapy</h2>
      <ul>
        <li>Joint replacements (knee, hip, shoulder)</li>
        <li>Spinal surgeries</li>
        <li>Fracture repairs</li>
        <li>Ligament reconstructions</li>
        <li>Cardiac surgery</li>
        <li>Abdominal surgery</li>
      </ul>

      <h2>What to Expect</h2>
      <p>Your physiotherapy program will be tailored to your specific surgery and recovery goals. It typically includes:</p>
      <ul>
        <li>Gentle exercises to maintain mobility</li>
        <li>Progressive strengthening exercises</li>
        <li>Balance and coordination training</li>
        <li>Gait training if needed</li>
        <li>Education on activity modifications</li>
      </ul>

      <h2>In-Clinic vs. Home Physiotherapy</h2>
      <p>Depending on your condition and mobility, physiotherapy can be provided at our clinic or in the comfort of your home. Our home care services ensure you receive quality care even when visiting the clinic is challenging.</p>

      <p>If you're scheduled for surgery or recovering from one, contact Swasti Lifecare to discuss your physiotherapy needs.</p>
    `,
    author: 'Swasti Lifecare Team',
    publicationDate: '2024-01-05T10:00:00Z',
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    // Try to get slugs from Strapi first
    const strapiSlugs = await getBlogSlugs();

    // If Strapi has slugs, use them; otherwise fall back to dummy data
    if (strapiSlugs.length > 0) {
      return strapiSlugs.map((slug) => ({ slug }));
    }
  } catch (error) {
    // If Strapi is not available (e.g., during build), use fallback data
    console.log('Strapi not available during build, using fallback blog slugs');
  }

  // Fallback to dummy data slugs
  return Object.keys(DUMMY_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  // Try to fetch from Strapi first
  const strapiPost = await getBlogBySlug(slug);
  const post = strapiPost || DUMMY_POSTS[slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // Try to fetch from Strapi first
  const strapiPost = await getBlogBySlug(slug);
  const post = strapiPost || DUMMY_POSTS[slug];

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publicationDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-secondary-500">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.publicationDate}>{formattedDate}</time>
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <BlogContent content={post.content} />

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Need Medical Advice?</h3>
            <p className="text-secondary-600 mb-6">
              Our team at Swasti Lifecare is here to help. Book an appointment for personalized
              healthcare advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking" className="btn-primary">
                Book Appointment
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8 pt-8 border-t border-secondary-200">
            <p className="text-secondary-600 mb-4">Share this article:</p>
            <div className="flex gap-3">
              <button
                className="p-2 bg-secondary-100 rounded-lg hover:bg-secondary-200 transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                className="p-2 bg-secondary-100 rounded-lg hover:bg-secondary-200 transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button
                className="p-2 bg-secondary-100 rounded-lg hover:bg-secondary-200 transition-colors"
                aria-label="Share on WhatsApp"
              >
                <svg className="w-5 h-5 text-secondary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
