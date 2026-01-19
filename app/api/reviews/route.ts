import { NextResponse } from 'next/server';
import { getReviews } from '@/lib/strapi';

export const revalidate = 60;

export async function GET() {
  try {
    const reviews = await getReviews();

    return NextResponse.json({
      reviews,
      meta: {
        total: reviews.length,
        fetchedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);

    // Return empty array on error - frontend will show placeholder reviews
    return NextResponse.json({
      reviews: [],
      meta: {
        total: 0,
        fetchedAt: new Date().toISOString(),
        error: 'Failed to fetch reviews from CMS',
      },
    });
  }
}
