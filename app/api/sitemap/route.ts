import { NextResponse } from 'next/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swastilifescare.com';

// Static pages
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/doctors', changefreq: 'weekly', priority: 0.9 },
  { url: '/labs', changefreq: 'monthly', priority: 0.8 },
  { url: '/physiotherapy', changefreq: 'monthly', priority: 0.8 },
  { url: '/home-care', changefreq: 'monthly', priority: 0.8 },
  { url: '/booking', changefreq: 'monthly', priority: 0.9 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

// Blog posts (in production, would fetch from Strapi)
const blogSlugs = [
  'importance-of-regular-health-checkups',
  'managing-chronic-pain-tips',
  'benefits-of-physiotherapy-after-surgery',
];

export async function GET() {
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
  ${blogSlugs
    .map(
      (slug) => `
  <url>
    <loc>${SITE_URL}/blogs/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
