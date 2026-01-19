import {
  StrapiSingleResponse,
  StrapiCollectionResponse,
  ClinicInfo,
  Box,
  Service,
  Doctor,
  Review,
  Blog,
  BlogPost,
} from '@/types';

const STRAPI_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FetchOptions {
  revalidate?: number | false;
  tags?: string[];
}

async function fetchFromStrapi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate = 60, tags } = options;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const fetchOptions: RequestInit = {
    headers,
    next: {
      revalidate,
      ...(tags && { tags }),
    },
  };

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, fetchOptions);

  if (!response.ok) {
    throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
  }

  return response.json();
}

// Clinic Info (Single Type)
export async function getClinicInfo(): Promise<ClinicInfo | null> {
  try {
    const response = await fetchFromStrapi<StrapiSingleResponse<ClinicInfo>>(
      '/clinic-info',
      { tags: ['clinic-info'] }
    );
    return response.data?.attributes || null;
  } catch (error) {
    console.error('Error fetching clinic info:', error);
    return null;
  }
}

// Boxes (Value Propositions)
export async function getBoxes(): Promise<Box[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Box, 'id'>>>(
      '/boxes?sort=order:asc',
      { tags: ['boxes'] }
    );
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching boxes:', error);
    return [];
  }
}

// Services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Service, 'id'>>>(
      '/services?sort=order:asc',
      { tags: ['services'] }
    );
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Service, 'id'>>>(
      `/services?filters[slug][$eq]=${slug}`,
      { tags: ['services'] }
    );
    if (response.data.length === 0) return null;
    return {
      id: response.data[0].id,
      ...response.data[0].attributes,
    };
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

export async function getServicesByType(serviceType: string): Promise<Service[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Service, 'id'>>>(
      `/services?filters[serviceType][$eq]=${serviceType}&sort=order:asc`,
      { tags: ['services'] }
    );
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching services by type:', error);
    return [];
  }
}

// Doctors
export async function getDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Doctor, 'id'>>>(
      '/doctors?sort=order:asc&populate=image',
      { tags: ['doctors'] }
    );
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

export async function getFeaturedDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Doctor, 'id'>>>(
      '/doctors?filters[featured][$eq]=true&sort=order:asc&populate=image',
      { tags: ['doctors'] }
    );
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching featured doctors:', error);
    return [];
  }
}

// Reviews
export async function getReviews(): Promise<Review[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Review, 'id'>>>(
      '/reviews?filters[published][$eq]=true&sort=reviewDate:desc',
      { tags: ['reviews'] }
    );
    return response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

// Blogs
export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Blog, 'id'>>>(
      '/blogs?sort=publicationDate:desc&populate=coverImage',
      { tags: ['blogs'] }
    );
    const blogs = response.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
    return blogs.map(transformBlogToPost);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<Omit<Blog, 'id'>>>(
      `/blogs?filters[slug][$eq]=${slug}&populate=coverImage`,
      { tags: ['blogs'] }
    );
    if (response.data.length === 0) return null;
    const blog: Blog = {
      id: response.data[0].id,
      ...response.data[0].attributes,
    };
    return transformBlogToPost(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const response = await fetchFromStrapi<StrapiCollectionResponse<{ slug: string }>>(
      '/blogs?filters[published][$eq]=true&fields[0]=slug',
      { tags: ['blogs'] }
    );
    return response.data.map((item) => item.attributes.slug);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}

// Helper to get full media URL
export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return '/images/placeholder-doctor.svg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// Helper to transform Blog with StrapiMedia to BlogPost with string URL
function transformBlogToPost(blog: Blog): BlogPost {
  return {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content,
    coverImage: blog.coverImage?.data?.attributes?.url
      ? getStrapiMediaUrl(blog.coverImage.data.attributes.url)
      : undefined,
    author: blog.author,
    publicationDate: blog.publicationDate,
  };
}
