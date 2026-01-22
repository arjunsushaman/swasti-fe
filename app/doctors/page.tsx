import DoctorsHero from '@/components/doctors/DoctorsHero';
import VisitingSpecialistsSection from '@/components/doctors/VisitingSpecialistsSection';
import ConsultationScheduleSection from '@/components/doctors/ConsultationScheduleSection';
import DoctorsCtaSection from '@/components/doctors/DoctorsCtaSection';
import { DOCTORS_DATA } from '@/lib/content';

export default function DoctorsPage() {
  const doctors = DOCTORS_DATA;

  const generalPractitioner = doctors.find((d) => d.speciality === 'general-practice');
  const specialists = doctors.filter((d) => d.speciality !== 'general-practice');

  return (
    <main className="overflow-hidden">
      <DoctorsHero generalPractitioner={generalPractitioner} />
      <VisitingSpecialistsSection specialists={specialists} />
      <ConsultationScheduleSection specialists={specialists} />
      <DoctorsCtaSection />
    </main>
  );
}
