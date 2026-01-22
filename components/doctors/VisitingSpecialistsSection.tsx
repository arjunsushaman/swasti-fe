'use client';

import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/Motion';
import type { Doctor } from '@/types';
import DoctorCard from './DoctorCard';

interface VisitingSpecialistsSectionProps {
  specialists: Doctor[];
}

export default function VisitingSpecialistsSection({ specialists }: VisitingSpecialistsSectionProps) {
  return (
    <AnimatedSection className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-accent-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Visiting Specialists
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Our visiting consultants bring advanced expertise right to your neighborhood, so you
            don&apos;t have to travel far for specialized care.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialists.map((doctor) => (
            <StaggerItem key={doctor.name}>
              <DoctorCard
                name={doctor.name}
                qualifications={doctor.qualifications}
                speciality={doctor.specialtyLabel}
                availability={doctor.availability}
                imageUrl={doctor.imageUrl}
                bio={doctor.bio}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
