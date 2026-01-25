import { Metadata } from 'next';
import HomecareHero from '@/components/homecare/HomecareHero';
import HomecareServices from '@/components/homecare/HomecareServices';
import HowItWorks from '@/components/homecare/HowItWorks';
import WhyChooseUs from '@/components/homecare/WhyChooseUs';
import ServiceAreas from '@/components/homecare/ServiceAreas';
import HomecareCTA from '@/components/homecare/HomecareCTA';
import { HOMECARE_CONTENT } from '@/lib/content';
import { ServiceSchema } from '@/components/seo/ServiceSchema';

export const metadata: Metadata = {
  title: 'Home Care Services',
  description:
    'Professional medical care at your doorstep. Doctor visits, nursing care, physiotherapy, and specialized services for elderly and recovering patients in Paravur, Varkala, and surrounding areas.',
  alternates: {
    canonical: 'https://swastilifescare.com/homecare',
  },
  openGraph: {
    title: 'Home Care Services in Kerala - Swasti Lifecare',
    description: 'Professional medical care at your doorstep in Paravur, Varkala and surrounding areas',
    url: 'https://swastilifescare.com/homecare',
  },
};

export default function HomecarePage() {
  // Map homecare services to schema format with appropriate procedure types
  const homecareServicesForSchema = HOMECARE_CONTENT.services.map((service) => {
    let procedureType: 'DiagnosticProcedure' | 'TherapeuticProcedure' | 'NoninvasiveProcedure';

    // Doctor visits are consultations (noninvasive), others are therapeutic
    if (service.id === 'doctor-visits') {
      procedureType = 'NoninvasiveProcedure';
    } else {
      procedureType = 'TherapeuticProcedure';
    }

    return {
      name: service.title,
      description: service.description,
      procedureType,
    };
  });

  return (
    <main className="overflow-hidden">
      {/* Schema markup for homecare services - invisible SEO enhancement */}
      <ServiceSchema services={homecareServicesForSchema} />

      <HomecareHero />
      <HomecareServices />
      <HowItWorks />
      <WhyChooseUs />
      <ServiceAreas />
      <HomecareCTA />
    </main>
  );
}
