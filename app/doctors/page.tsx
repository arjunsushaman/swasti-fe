import { Metadata } from 'next';
import DoctorsHero from '@/components/doctors/DoctorsHero';
import VisitingSpecialistsSection from '@/components/doctors/VisitingSpecialistsSection';
import ConsultationScheduleSection from '@/components/doctors/ConsultationScheduleSection';
import { DOCTORS_DATA } from '@/lib/content';
import { DoctorSchema } from '@/components/seo/DoctorSchema';

export const metadata: Metadata = {
  title: 'Our Expert Doctors',
  description:
    'Meet our experienced team of medical specialists at Swasti Lifecare. Expert care in neurology, orthopedics, pediatrics, pulmonology, and general practice in Parippally, Kerala.',
  alternates: {
    canonical: 'https://swastilifescare.com/doctors',
  },
  openGraph: {
    title: 'Expert Medical Specialists at Swasti Lifecare',
    description: 'Experienced doctors providing specialized healthcare in Kerala',
    url: 'https://swastilifescare.com/doctors',
  },
};

export default function DoctorsPage() {
  const doctors = DOCTORS_DATA;

  const generalPractitioner = doctors.find((d) => d.speciality === 'general-practice');
  const specialists = doctors.filter((d) => d.speciality !== 'general-practice');

  return (
    <main className="overflow-hidden">
      {/* Schema markup for all doctors - invisible SEO enhancement */}
      {doctors.map((doctor) => (
        <DoctorSchema
          key={doctor.name}
          name={doctor.name}
          specialty={doctor.specialtyLabel}
          qualifications={doctor.qualifications}
          imageUrl={doctor.imageUrl}
          availability={doctor.availability}
        />
      ))}

      <DoctorsHero generalPractitioner={generalPractitioner} />
      <VisitingSpecialistsSection specialists={specialists} />
      <ConsultationScheduleSection specialists={specialists} />
    </main>
  );
}
