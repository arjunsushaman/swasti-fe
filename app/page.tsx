import Hero from '@/components/home/Hero';
import Boxes from '@/components/home/Boxes';
import ServicesSection from '@/components/home/ServicesSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import ContactSection from '@/components/home/ContactSection';
import IntroSection from '@/components/home/IntroSection';
import DoctorsPreview from '@/components/home/DoctorsPreview';
import CTASection from '@/components/home/CTASection';
import { DOCTORS_DATA } from '@/lib/content';

export default function HomePage() {
  const doctors = DOCTORS_DATA;
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
