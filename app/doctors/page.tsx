import DoctorsHero from '@/components/doctors/DoctorsHero';
import VisitingSpecialistsSection from '@/components/doctors/VisitingSpecialistsSection';
import ConsultationScheduleSection from '@/components/doctors/ConsultationScheduleSection';
import DoctorsCtaSection from '@/components/doctors/DoctorsCtaSection';
import { getDoctors } from '@/lib/strapi';
import { DOCTORS_DATA } from '@/lib/constants';

export default async function DoctorsPage() {
  // Fetch from CMS with fallback to DOCTORS_DATA
  const doctorsFromCMS = await getDoctors();
  const doctors = doctorsFromCMS.length > 0 ? doctorsFromCMS : DOCTORS_DATA;

  const generalPractitioner = doctors.find((d) => d.specialty === 'general-practice');
  const specialists = doctors.filter((d) => d.specialty !== 'general-practice');

  return (
    <main className="overflow-hidden">
      <DoctorsHero generalPractitioner={generalPractitioner} />
      <VisitingSpecialistsSection specialists={specialists} />
      <ConsultationScheduleSection specialists={specialists} />
      <DoctorsCtaSection />
    </main>
  );
}
