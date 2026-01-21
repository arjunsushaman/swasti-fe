import { Metadata } from 'next';
import HomecareHero from '@/components/homecare/HomecareHero';
import HomecareServices from '@/components/homecare/HomecareServices';
import HowItWorks from '@/components/homecare/HowItWorks';
import WhyChooseUs from '@/components/homecare/WhyChooseUs';
import ServiceAreas from '@/components/homecare/ServiceAreas';
import HomecareCTA from '@/components/homecare/HomecareCTA';

export const metadata: Metadata = {
  title: 'Home Care Services',
  description:
    'Professional medical care at your doorstep. Doctor visits, nursing care, physiotherapy, and specialized services for elderly and recovering patients in Paravur, Varkala, and surrounding areas.',
};

export default function HomecarePage() {
  return (
    <main className="overflow-hidden">
      <HomecareHero />
      <HomecareServices />
      <HowItWorks />
      <WhyChooseUs />
      <ServiceAreas />
      <HomecareCTA />
    </main>
  );
}
