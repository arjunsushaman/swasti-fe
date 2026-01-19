# Vercel Deployment Setup

## Build Issue Fixed

The Vercel build was failing because the app was trying to connect to a local Strapi backend (`localhost:1337`) during the build process. This has been fixed with the following changes:

### Changes Made

1. **Updated `BlogContent.tsx`**: Now handles both Strapi BlocksContent (JSON) and HTML strings from fallback data
2. **Created `.env.production`**: Production environment variables with safe defaults
3. **Updated `next.config.js`**: Added comments for production Strapi domain configuration
4. **Improved error handling**: Better logging in `lib/strapi.ts`

### How the App Works Now

The app is built with **fallback data** that allows it to build and deploy successfully even without a live Strapi backend:

- **Home page**: Uses `DOCTORS_DATA` from `lib/constants.ts`
- **Doctors page**: Uses `DOCTORS_DATA` from `lib/constants.ts`
- **Blog listing**: Uses `DUMMY_POSTS` defined in the page
- **Blog posts**: Uses `DUMMY_POSTS` defined in `app/blogs/[slug]/page.tsx`

When Strapi is not available (like during Vercel builds), the app gracefully falls back to this hardcoded data.

## Vercel Environment Variables Setup

To connect your deployed app to a production Strapi instance:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** > **Environment Variables**
3. Add the following variables:

### Required Variables

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `STRAPI_API_URL` | `https://your-strapi-domain.com` | Your production Strapi URL (without `/api`) |
| `STRAPI_API_TOKEN` | `your-production-token` | Strapi API token for authentication |
| `NEXT_PUBLIC_SITE_URL` | `https://swastilifescare.com` | Your production site URL |

### Optional Variables (for booking form)

| Variable Name | Value | Description |
|--------------|-------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `your-service-id` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `your-template-id` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `your-public-key` | EmailJS public key |

### Environment Scope

For each variable, select the environment(s):
- ✅ Production
- ✅ Preview
- ✅ Development (optional)

## Next Steps

### Option 1: Deploy with Fallback Data (Current Setup)

The app will deploy successfully **right now** using the fallback data. This is useful for:
- Testing the deployment
- Demonstrating the frontend
- Development/staging environments

**Action**: Simply push your changes and redeploy on Vercel. The build should succeed.

### Option 2: Connect to Production Strapi

When you have a production Strapi instance ready:

1. Deploy your Strapi backend (e.g., on Railway, Heroku, DigitalOcean, etc.)
2. Get the production URL and API token
3. Add the environment variables in Vercel (see table above)
4. Update `next.config.js` to add your Strapi domain to `remotePatterns`:
   ```javascript
   {
     protocol: 'https',
     hostname: 'your-strapi-domain.com',
     pathname: '/uploads/**',
   },
   ```
5. Redeploy on Vercel

The app will automatically use Strapi data when available, and fall back to dummy data if there are any issues.

## Testing Locally

To test the production build locally:

```bash
npm run build
npm run start
```

This will use the `.env.production` file and should complete successfully.

## Current Build Behavior

- ✅ Build completes successfully
- ✅ Static pages are generated with fallback data
- ✅ Error logs from Strapi connection attempts are expected and handled
- ✅ App works perfectly with fallback data
- ✅ App will automatically use Strapi data when configured

## Troubleshooting

### Build still failing?

1. Check that all changes are committed and pushed
2. Clear Vercel build cache: Project Settings > General > Clear Cache
3. Trigger a new deployment

### Want to verify the build locally?

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Start production server
npm run start
```

### Need to update fallback data?

Edit the following files:
- `lib/constants.ts` - Doctor data
- `app/blogs/page.tsx` - Blog listing
- `app/blogs/[slug]/page.tsx` - Individual blog posts

## Security Note

Never commit real API tokens to git. The `.env.local` file with your real tokens is already in `.gitignore`. Only the `.env.local.example` and `.env.production` (with dummy values) are committed.
