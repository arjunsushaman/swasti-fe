# OG Image Requirements for Swasti Lifecare

## Overview

The Open Graph (OG) image is the image that appears when your website is shared on social media platforms like Facebook, LinkedIn, WhatsApp, and Twitter. It's a crucial element for social media marketing and brand recognition.

## Current Status

**Missing File:** `public/images/og-image.jpg`

This file is referenced in the website metadata but doesn't currently exist. Creating this image is a **high priority** for SEO and social media optimization.

---

## Technical Requirements

### File Specifications

**Dimensions:**
- Width: 1200px
- Height: 630px
- Aspect Ratio: 1.91:1 (Facebook/LinkedIn standard)

**File Format:**
- Format: JPG (preferred) or PNG
- JPG recommended for smaller file size
- PNG if transparency or text clarity is critical

**File Size:**
- Target: < 200KB (smaller is better)
- Maximum: 300KB
- Optimize with compression tools (TinyPNG, ImageOptim)

**Location:**
```
public/images/og-image.jpg
```

**URL:**
```
https://swastilifescare.com/images/og-image.jpg
```

---

## Design Requirements

### Content to Include

**Essential Elements:**
1. **Clinic Logo** - Swasti Lifecare logo (prominent, top-left or center)
2. **Main Tagline** - "Clarity. Compassion. Care that continues."
3. **Secondary Text** - "Expert Healthcare in Parippally, Kerala"
4. **Phone Number** - "+91-8547734214" (highly visible)
5. **Website URL** - "swastilifescare.com" (optional, bottom)

**Optional Elements:**
- Medical imagery (clinic photo, stethoscope, medical cross)
- Brand colors (consistent with website)
- Location badge (Parippally, Kerala)
- Clinic hours (9 AM - 9 PM)

### Design Guidelines

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  LOGO              [Medical Imagery/Photo]      │
│                                                  │
│         Clarity. Compassion.                    │
│         Care that continues.                    │
│                                                  │
│      Expert Healthcare in Parippally, Kerala    │
│                                                  │
│           📞 +91-8547734214                      │
│           swastilifescare.com                    │
└─────────────────────────────────────────────────┘
```

**Typography:**
- Headline: 60-80px, bold, highly readable
- Subheading: 40-50px, medium weight
- Contact info: 35-45px, easily readable
- Font: Sans-serif (Arial, Helvetica, Open Sans)
- High contrast with background

**Color Scheme:**
- Background: White or light gradient
- Text: Dark gray or black (#1F2937)
- Accent: Primary brand color (teal/blue)
- Phone/CTA: Bright, attention-grabbing color

**Safe Zone:**
- Keep all important content within 1100x600px center area
- Edges may be cropped on some platforms
- Logo and text should not touch borders

### Platform-Specific Considerations

**Facebook/LinkedIn:**
- 1200x630px is optimal
- Preview shows full image

**Twitter:**
- Also uses this image size
- May crop to 2:1 aspect ratio
- Center important content

**WhatsApp:**
- Shows full OG image
- Thumbnail in chat list
- High visibility, ensure text is readable

**Mobile:**
- Image may be displayed smaller
- Text must be readable at 400px width
- Avoid tiny text

---

## Creation Methods

### Option 1: Professional Designer (Recommended)

**Services:**
- Fiverr: $10-50
- Upwork: $20-100
- 99designs: $50-200

**Provide Designer With:**
- This requirements document
- Clinic logo (high resolution)
- Brand colors (hex codes)
- Clinic photos
- Website URL for reference

**Turnaround:** 1-3 days

### Option 2: DIY Design Tools

**Canva (Easiest):**
1. Go to https://canva.com
2. Create design → Custom size → 1200x630px
3. Use template or start from blank
4. Add elements:
   - Upload clinic logo
   - Add text with tagline
   - Add phone number
   - Add background/images
5. Download as JPG (high quality)
6. Optimize at https://tinypng.com

**Figma (More Control):**
1. Create 1200x630px frame
2. Design with precise control
3. Export as JPG or PNG
4. Optimize file size

**Adobe Photoshop/Illustrator:**
- Professional option
- Full design control
- Requires design skills

### Option 3: Screenshot + Edit

**Quick Solution:**
1. Take screenshot of website hero section
2. Crop/resize to 1200x630px
3. Add text overlay with contact info
4. Not ideal but works temporarily

---

## Example Content Variations

### Version 1: Clean & Professional
```
Background: Soft gradient (white to light blue)
Logo: Top-left (200x100px)
Main Text: "Clarity. Compassion. Care that continues."
Subtext: "Expert Healthcare in Parippally, Kerala"
Phone: Large, centered at bottom
```

### Version 2: Image-Heavy
```
Background: Clinic exterior photo (50% opacity overlay)
Logo: Top-center with white background
Text: White text with dark shadow
Phone: Bright colored box at bottom
```

### Version 3: Medical Theme
```
Background: Medical cross pattern (subtle)
Logo: Left side
Text: Right side, stacked
Icons: Phone icon, location icon
Colors: White, teal, dark gray
```

---

## Testing & Validation

### Before Publishing

**1. File Check:**
- [ ] Dimensions: 1200x630px
- [ ] File size: < 300KB
- [ ] Format: JPG or PNG
- [ ] Location: public/images/og-image.jpg

**2. Visual Check:**
- [ ] Text is readable at small sizes
- [ ] Logo is clear and recognizable
- [ ] Phone number is highly visible
- [ ] No spelling errors
- [ ] Colors match brand

**3. Quality Check:**
- [ ] High resolution (not pixelated)
- [ ] Proper compression (fast loading)
- [ ] No watermarks or copyright issues
- [ ] Professional appearance

### After Publishing

**Social Media Debuggers:**

**Facebook:**
1. Go to https://developers.facebook.com/tools/debug/
2. Enter: https://swastilifescare.com
3. Click "Scrape Again" to refresh cache
4. Verify image appears correctly
5. Check for warnings/errors

**LinkedIn:**
1. Go to https://www.linkedin.com/post-inspector/
2. Enter: https://swastilifescare.com
3. Verify image preview
4. Clear cache if needed

**Twitter:**
1. Go to https://cards-dev.twitter.com/validator
2. Enter: https://swastilifescare.com
3. Preview card
4. Request approval if needed

**WhatsApp:**
1. Send link to yourself on WhatsApp
2. Check thumbnail appearance
3. Verify phone number visible
4. Test on mobile and desktop

### Troubleshooting

**Image Not Showing:**
1. Clear social media cache (use debuggers above)
2. Wait 24 hours for cache refresh
3. Verify file is accessible: https://swastilifescare.com/images/og-image.jpg
4. Check browser console for 404 errors
5. Verify file name is exactly "og-image.jpg"

**Image Blurry:**
1. Check original dimensions (must be 1200x630px)
2. Use higher quality export settings
3. Don't upscale smaller images
4. Save as PNG instead of JPG

**Image Cropped:**
1. Keep content in safe zone (1100x600px center)
2. Test on multiple platforms
3. Adjust layout if needed

---

## Quick Start Template

### Text Content for Designer

```
PRIMARY HEADLINE:
Clarity. Compassion. Care that continues.

SECONDARY TEXT:
Expert Healthcare in Parippally, Kerala

PHONE NUMBER:
+91-8547734214

WEBSITE:
swastilifescare.com

ADDITIONAL INFO:
- Open Daily: 9 AM - 9 PM
- Family Clinic with Specialist Care
- Neurology • Orthopedics • Pediatrics • Pulmonology
```

### Brand Colors

```
Primary Blue: #0891B2 (teal)
Secondary: #0F766E (darker teal)
Accent: #F97316 (orange)
Background: #FFFFFF (white)
Text: #1F2937 (dark gray)
```

### Logo

**File:** Located in repository at `public/images/logo-swasti.png`
- Transparent background
- Use on white or light backgrounds
- Maintain aspect ratio
- Don't distort or recolor

---

## After Creating the Image

### 1. Save to Repository

```bash
# Place file in public/images/
cp og-image.jpg public/images/og-image.jpg

# Commit and push
git add public/images/og-image.jpg
git commit -m "Add OG image for social media"
git push origin main
```

### 2. Verify in Code

File is already referenced in `app/layout.tsx`:
```typescript
openGraph: {
  images: [
    {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: SITE_NAME,
    },
  ],
},
```

### 3. Test After Deployment

1. Wait for Vercel deployment (2-5 minutes)
2. Visit: https://swastilifescare.com/images/og-image.jpg
3. Should display the image
4. Use social media debuggers to verify
5. Share on platforms to test real-world appearance

---

## Alternative: Multiple OG Images (Advanced)

For different pages, you can have unique OG images:

**Homepage:** `og-image.jpg` (general clinic)
**Doctors:** `og-image-doctors.jpg` (doctor photos)
**Homecare:** `og-image-homecare.jpg` (home care imagery)

Update metadata per page:
```typescript
export const metadata: Metadata = {
  openGraph: {
    images: ['/images/og-image-doctors.jpg'],
  },
};
```

---

## Checklist

**Before Creating:**
- [ ] Review this document
- [ ] Gather clinic logo (high-res)
- [ ] Get brand colors
- [ ] Collect clinic photos
- [ ] Decide on design approach

**During Creation:**
- [ ] Use correct dimensions (1200x630px)
- [ ] Include all essential elements
- [ ] Maintain brand consistency
- [ ] Keep file size < 300KB
- [ ] Test readability at small sizes

**After Creating:**
- [ ] Save to public/images/og-image.jpg
- [ ] Commit and push to GitHub
- [ ] Wait for Vercel deployment
- [ ] Verify image is accessible
- [ ] Test with social media debuggers
- [ ] Share on platforms to confirm

---

## Resources

**Design Inspiration:**
- Dribbble: Search "medical OG image"
- Behance: Search "healthcare social media"
- Canva templates: "Facebook post medical"

**Tools:**
- Canva: https://canva.com
- Remove.bg (background removal): https://remove.bg
- TinyPNG (compression): https://tinypng.com
- Image resizer: https://imageresizer.com

**Validation:**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/
- Twitter Validator: https://cards-dev.twitter.com/validator
- Open Graph Checker: https://opengraphcheck.com

---

**Priority:** High
**Estimated Time:** 30 minutes (Canva) to 2 hours (professional design)
**Impact:** Significant improvement in social media presence and click-through rates

---

**Document Version:** 1.0
**Last Updated:** January 2026
