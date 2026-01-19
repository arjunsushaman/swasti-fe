import Hero from '@/components/home/Hero';
import Boxes from '@/components/home/Boxes';
import ServicesSection from '@/components/home/ServicesSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import ContactSection from '@/components/home/ContactSection';
import IntroSection from '@/components/home/IntroSection';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import CTASection from '@/components/home/CTASection';
import { getDoctors } from '@/lib/strapi';
import { DOCTORS_DATA } from '@/lib/constants';

export default async function HomePage() {
  // Fetch doctors from CMS with fallback to DOCTORS_DATA
  const doctorsFromCMS = await getDoctors();
  const doctors = doctorsFromCMS.length > 0 ? doctorsFromCMS : DOCTORS_DATA;
  return (
    <main className="overflow-hidden">
      <Hero />
      <Boxes />
      <IntroSection />
      <ServicesSection />
      <DoctorsPreview doctors={doctors} />
      <ReviewsSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
